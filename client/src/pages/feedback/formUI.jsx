import "./formUI.css";

export const FeedbackForm = () => {

    return (
        <div className="form-container"
            style={{
                backgroundColor : "#052445"
            }}
        >
            <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdjFvkAgFOqfE2OvzJMb1-M2913D-TUgEzx1WHencs3m9gVWA/formResponse"
                method="post"
            >
                <div class="form-element">
                    <div className="form-header">
                        <span>Feedback Form</span>
                    </div>
                    <div class="form-email">
                        <span class="formTitle">Email Address</span>
                        <input type="email" name="entry.2088789462" placeholder="Enter Your Email" required size={70} />
                    </div>
                    <br />
                    <div class="form-q1">
                        <span class="formTitle">How was your hotel stay? Please describe in short.</span>
                        <input type="text" name="entry.2004991036" placeholder="Your Answer" required size={70} />
                    </div>
                    <br />
                    <div class="form-q2">
                        <span class="formTitle">What features or functionalities do you find most valuable in
                            Journey Vista, and why?</span>
                        <input type="text" name="entry.80077597" placeholder="Your Answer" required size={70} />
                    </div>
                    <br />
                    <div class="form-q3">
                        <span class="formTitle">How would you rate your Hotel Booking journey?Let us know your experience.</span>
                        <div>
                            <input type="radio" name="entry.1587277809" id="q3-1" placeholder="Your Answer" value="1"
                                required />
                            <label htmlFor="q3-1">1</label>
                        </div>
                        <div>
                            <input type="radio" name="entry.1587277809" id="q3-2" placeholder="Your Answer" value="2" />
                            <label htmlFor="q3-2">2</label>
                        </div>
                        <div>
                            <input type="radio" name="entry.1587277809" id="q3-3" placeholder="Your Answer" value="3" />
                            <label htmlFor="q3-3">3</label>
                        </div>
                        <div>
                            <input type="radio" name="entry.1587277809" id="q3-4" placeholder="Your Answer" value="4" />
                            <label htmlFor="q3-4">4</label>
                        </div>
                        <div>
                            <input type="radio" name="entry.1587277809" id="q3-5" placeholder="Your Answer" value="5" />
                            <label htmlFor="q3-5">5</label>
                        </div>
                    </div>
                    <br />
                    <div class="form-q4">
                        <span class="formTitle">How likely are you to recommend Journey Vista to a friend or colleague on a
                            scale of 1 (Not
                            Likely) to 10 (Very Likely)?</span>
                        <div className="from-q4-radioWrapper">
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-1" placeholder="Your Answer" value="1"
                                    required />
                                <label htmlFor="q4-1">1</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-2" placeholder="Your Answer" value="2" />
                                <label htmlFor="q4-2">2</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-3" placeholder="Your Answer" value="3" />
                                <label htmlFor="q4-3">3</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-4" placeholder="Your Answer" value="4" />
                                <label htmlFor="q4-4">4</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-5" placeholder="Your Answer" value="5" />
                                <label htmlFor="q4-5">5</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-6" placeholder="Your Answer" value="6" />
                                <label htmlFor="q4-6">6</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-7" placeholder="Your Answer" value="7" />
                                <label htmlFor="q4-7">7</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-8" placeholder="Your Answer" value="8" />
                                <label htmlFor="q4-8">8</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-9" placeholder="Your Answer" value="9" />
                                <label htmlFor="q4-9">9</label>
                            </div>
                            <div className="form-q4-divWrapper">
                                <input type="radio" name="entry.2113157978" id="q4-10" placeholder="Your Answer" value="10" />
                                <label htmlFor="q4-10">10</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="form-q5">
                        <span class="formTitle">What would you like us to improve on for you to keep enjoying our
                            service?</span>
                        <input type="text" name="entry.1993697693" placeholder="Your Answer" required size={70} />
                    </div>
                    <br />
                    <div class="form-q6">
                        <span class="formTitle">Were there any difficulties or challenges you encountered while using Journey
                            Vista? If yes,
                            please describe them br/iefly.</span>
                        <input type="text" name="entry.821418759" placeholder="Your Answer" required size={70} />
                    </div>
                    <br />
                    <div class="form-submit">
                        <button className="form-submit-button " type="submit">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FeedbackForm;