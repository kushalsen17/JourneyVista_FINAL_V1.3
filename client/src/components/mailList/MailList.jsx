import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">
        Save time, save money!
      </h1>
      <span className="mailDesc">
        Attract more guests, boost bookings - register your hotel with us!
      </span>
      <div className="mailInputContainer">
        Contact Us:<span>journeyVista777@business.co</span>
        {/* <input type="text" placeholder="Your Email" />
          <button>Subscribe</button> */}
      </div>
    </div>
  )
}

export default MailList