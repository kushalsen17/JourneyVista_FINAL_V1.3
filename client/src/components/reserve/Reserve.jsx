import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import StripeCheckout from 'react-stripe-checkout';
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// const stripe=require('stripe')('sk_test_51NrlYGSEIDDuA5VmivfxpUKhj0Nc61j7UcIderxKmQpFqEmw2vrzEocc2dpkkxbjIrAlZV64OTkMex7ZX8B56Inm00rcWZ9bd4')



const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("");
    } catch (err) { }
  };



  async function onToken(token) {
    // try{

    //   const customer= await stripe.customer.create({
    //     email:token.email,
    //     source:token.id  
    //   })

    //   const payment=await stripe.charges.create({

    //     amount:itemPrice,
    //     customer:customer.id,
    //     currency:"inr",
    //     receipt_email:token.email
      
    //   },{
    //     idempotancyKey:uuidv4()
    //   })

    //   if(payment)
    //   {
    //     res.send('Payment Successful, Your Room is Booked')
    //   }
  
    // }catch(error){
    //   return res.status(400).json({error});
  
    // }
    console.log(token)
 
  }
  
  const itemPrice = data.price;

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <StripeCheckout
          amount={itemPrice * 100}
          currency="INR"
          token={onToken}
          stripeKey="pk_test_51NrlYGSEIDDuA5Vm318UmhWfuaSH7i2mC3N6oY1Dc5EGLPIBFyIulUQHSdtdQehTknyMu8CViDPiKPML0RAP19Tc00puXQJ9GG"
        >
          <button
            onClick={handleClick}
            className="rButton">
            Reserve Now! {' '}
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default Reserve;