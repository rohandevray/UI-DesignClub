import React from "react";
import styled from "styled-components";
import carr from "../images/carr.png";
import location from "../images/location.svg";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";

function Contact() {
  return (
    <Card>
      <Content>
        <div className="vexe">
          <h1 id="bye">Contact Us</h1>
          <p id="bye">
            Feel like contacting us? Submit your <br /> queries here and we will
            get back to you <br /> as soon as possible.
          </p>
        </div>
        <div className="icons">
          <h2>Get in touch.</h2>
          <Block>
            <Left>
              <img src={location} alt="" />
              <img src={mail} alt="" id="mail" />
              <img src={phone} alt="" id="pixel" />
            </Left>
            <Right>
              <p>
                National Institute of Technology Karnataka, NH 66, Srinivas
                Nagar, Surathkal, Mangaluru, Karnataka 575025
              </p>
              <p>captain.racing@edu.in</p>
              <p className="phonee">7259159980, 91135142266</p>
            </Right>
          </Block>
        </div>
      </Content>
      <img src={carr} alt="" id="carr" />
      <Submit>
        <h3>Send us a Message</h3>
        <form action="">
          <input type="text" placeholder="Name" /> <br />
          <input type="text" placeholder="Email" />
          <br />
          <input type="text" placeholder="Phone" />
          <br />
          <textarea
            name=""
            id=""
            cols="48"
            rows="10"
            placeholder="Message"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
        <Media>
          <a href="https://www.facebook.com/nitkracing">FaceBook</a>{" "}
          <span></span>
          <a href="https://www.instagram.com/nitkracing/">Instagram</a>
          <span></span>
          <a href="https://www.linkedin.com/company/nitkracing/">Linkedin</a>
        </Media>
      </Submit>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  img {
    position: absolute;
    width: 55%;
    height: 60%;
    bottom: 2%;
    left: 1.4%;
    opacity: 0.12;
  }
`;

const Left = styled.div`
  display: inline-block;
  img {
    position: relative;
    top: 20%;
    margin-bottom: 1rem;
    display: block;
    cursor: pointer;
    z-index: 100;
    transition: all 0.5 ease;
    &:hover {
      transform: translateY(-10%);
    }
    @media (max-width: 1231px) {
      position: relative;
      top: 25%;
    }
  }
  #mail {
    margin-top: 3.4rem;
  }
`;
const Right = styled.div`
  display: block;
  p {
    position: relative;
    left: 8%;
    top: 10%;
  }
  .phonee {
    position: relative;
    top: 15%;
  }
`;
const Block = styled.div`
  display: flex;
  position: relative;
  top: -0.5rem;
`;
const Content = styled.div`
  @media (max-width: 840px) {
    position: absolute;
    top: 100%;
  }
  width: 30%;
  height: 80vh;
  position: relative;
  left: 10%;
  top: 8%;
  padding: 2rem 0 0 2rem;
  h1 {
    color: white;
    font-weight: bold;
    font-size: 3rem;
  }
  p {
    padding-top: 1rem;
    color: white;
    font-family: "Montserrat", sans-serif;
    line-height: 1.6rem;
  }
  .icons {
    position: relative;
    top: 36%;

    p {
      opacity: 0.75;
    }
    img {
      width: 2.1rem;
      height: 2rem;
      position: relative;
      opacity: 0.75;
    }
    h2 {
      color: #a7a4a4;
      font-size: 1.9rem;
      font-weight: bold;
    }

    #one {
      margin-left: 0;
    }
    @media (max-width: 1231px) {
      position: relative;
      top: 8rem;
      h2 {
        font-size: 1.7rem;
      }
    }
    @media (max-width: 974px) {
      position: relative;
      top: 3rem;
    }
  }

  @media (max-width: 1300px) {
    position: absolute;
    left: 5%;
  }
  @media (max-width: 1231px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
const Submit = styled.div`
  @media (max-width: 840px) {
    position: absolute;
    left: 40%;
    top: 40%;
    transform: translate(-40%, -40%);
  }
  position: absolute;
  opacity: 0.7;
  right: 10%;
  background-color: transparent;
  width: 28rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  height: 80vh;
  top: 8%;
  border-radius: 1.2rem;
  padding: 2rem 0 0 2rem;
  color: white;
  input,
  textarea {
    width: 90%;
    height: 2.9rem;
    margin-bottom: 1.7rem;
    border-color: white;
    color: white;
    font-size: 1.1rem;
    &::placeholder {
      font-size: 0.95rem;
    }
    &:focus {
      outline-color: white;
    }
    background-color: black;
    font-weight: 500;
  }
  textarea {
    height: 8.5rem;
    &::placeholder {
      font-size: 0.95rem;
    }
  }

  p {
    padding-top: 4%;
    font-weight: bold;
    color: white;
  }
  #last {
    margin-top: 5%;
  }
  #specs {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid blue;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    &:checked {
      background-color: #ff0000;
      width: 1.3em;
      height: 1.3em;
      border-radius: 1.3rem;
    }
  }
  label {
    display: flex;
    position: relative;
    left: 11%;
  }
  h3 {
    margin-bottom: 2rem;
    color: white;
    font-weight: bold;
    font-size: 1.4rem;
  }
  button {
    position: relative;
    width: 90%;
    position: relative;
    height: 2.8rem;
    border: none;
    background-color: #ff0000;
    color: white;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      letter-spacing: 1px;
      transform: translateY(-8%);
    }
    &:focus {
      transform: scale(0.95);
    }
  } //for mobile
  @media (max-width: 768px) {
  }
`;

const Media = styled.div`
  position: relative;
  top: 5.5%;
  .face {
    width: 10rem;
    height: 10rem;
    background-color: red;
  }
  a {
    text-decoration: none;
    padding: 1rem;

    display: inline-block;
    margin-left: 0.4rem;

    color: white;
    transition: all 0.5s ease;
    &:hover {
      transform: translateY(-4%);
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  span {
    position: relative;
    bottom: 0.1rem;
    height: 6px;
    width: 6px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
`;
export default Contact;
