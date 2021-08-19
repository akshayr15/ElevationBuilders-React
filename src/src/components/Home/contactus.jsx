import react, { Component, useEffect, useState } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="donor-section theme-section" id={"section1"} style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="area-heading text-center">
                <h2 className="area-title">For more information </h2>
                <p>Feel free to contact us!!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="donor-section-wrapper">
                <div className="single-donor-info">
                  <form action="#">
                    <div className="donor-information-wrapper">
                      <h2 className="donor-title">Contact Us</h2>
                      <div className="donor-information">
                        <div className="form-group">
                          <input
                            type="text"
                            className="amount-input"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="amount-input"
                            placeholder="Phone"
                            required
                          />
                          <input
                            type="email"
                            className="amount-input"
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <textarea
                            rows="3"
                            placeholder="Type your message"
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn-default btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="donor-thumb single-donor-info">
                  <img
                    src="img/bg/banner.png"
                    style={{ width: "100%", height: "557px" }}
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUs;
