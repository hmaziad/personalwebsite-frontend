import React, { Component } from "react";
import Joi from "joi-browser";
import axios from "axios";
import isEmail from "isemail";
import config from "../config.json";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",

    feedbackMessage: {
      error: false,
      message: "",
    },
  };

  schema = {
    name: Joi.string().required().label("Name"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  };

  handleChange = (event) => {
    // this.setState(text);
    // {
    //   console.log("text", event.target.value);
    //   console.log("name", event.target.name);
    // }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { error } = Joi.validate(
      {
        name: this.state.name,
        subject: this.state.name,
        message: this.state.name,
      },
      this.schema
    );
    if (error)
      return this.setState({
        feedbackMessage: {
          error: true,
          message: error.details[0].message,
        },
      });
    if (!isEmail.validate(this.state.email))
      return this.setState({
        feedbackMessage: {
          error: true,
          message: "Email is not valid",
        },
      });

    axios
      .post(config.apiUrl, {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      })
      .then((res) =>
        // send toast
        {
          console.log("res", res);
          this.setState({
            feedbackMessage: {
              error: false,
              message: "Email has been sent. Thank you.",
            },
          });
          this.setState({ name: "", email: "", subject: "", message: "" });
        }
      )
      .catch((err) => {
        this.setState({
          feedbackMessage: {
            error: true,
            message: err.response.data,
          },
        });
        console.log("err", err.response.data);
      });
  };

  render() {
    const {
      name: contactName,
      email: contactEmail,
      subject: contactSubject,
      message: contactMessage,
    } = this.state;

    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form>
              <fieldset>
                <div>
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="name"
                    name="name"
                    value={contactName}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="email"
                    name="email"
                    value={contactEmail}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    size="35"
                    id="subject"
                    name="subject"
                    value={contactSubject}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="message"
                    name="message"
                    value={contactMessage}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <p
                  style={{
                    color: this.state.feedbackMessage.error ? "red" : "green",
                    textAlign: "center",
                  }}
                >
                  {this.state.feedbackMessage.message}
                </p>
                <div style={{ marginTop: 10 }}>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Submit
                  </button>
                  {/* <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span> */}
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            */}
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
