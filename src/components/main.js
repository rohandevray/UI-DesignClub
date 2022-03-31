import React from "react";
import styled from "styled-components";
import car from "../images/lo.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";
import link from "../images/website.svg";
import location from "../images/location.svg";
import mail from "../images/mail.svg";

function Contact() {
  return (
    <Card>
      <Content>
        <h1>Contact Us</h1>
        <p>
          Feel like contacting us? Submit your <br /> queries here and we will
          get back to you <br /> as soon as possible.
        </p>
        <div className="icons">
          <h2>Get in touch.</h2>
          <Block>
            <Left>
              <img src={location} alt="" />
              <img src={mail} alt="" id="mail" />
            </Left>
            <Right>
              <p>
                National Institute of Technology Karnataka, NH 66, Srinivas
                Nagar, Surathkal, Mangaluru, Karnataka 575025
              </p>
              <p>nitkracing@edu.in</p>
            </Right>
          </Block>

          <div className="media">
            <a href="https://www.instagram.com/nitkracing/">
              <img src={insta} alt="" id="one" />
            </a>
            <br />
            <a href="https://www.linkedin.com/company/nitkracing/mycompany/">
              <img src={linkedin} alt="" id="two" />
            </a>
            <br />
            <a href="https://twitter.com/nitkracing?lang=en">
              <img src={link} alt="" id="three" />
            </a>
            <br />
          </div>
        </div>
      </Content>
      <img src={car} alt="" />
      <Submit>
        <h3>Send us a Message</h3>
        <form action="">
          <input type="text" placeholder="Name" /> <br />
          <input type="text" placeholder="Email" />
          <br />
          <input type="text" placeholder="Phone" />
          <br />
          <p>Preffered method of communication</p> <br />
          <MidZ>
            <MidX>
              <input type="checkbox" name="phone" id="specs" />
              <label for="phone">Phone</label>
            </MidX>
            <MidY>
              <input type="checkbox" name="mess" id="specs" />
              <label for="mess">Email</label>
            </MidY>
          </MidZ>
          <input type="text" placeholder="Message" id="last" />
          <br />
          <button type="submit">Submit</button>
        </form>
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
    left: 10%;
    top: 20%;
  }
`;
const MidX = styled.div`
  display: flex;
  position: relative;
  left: 2%;
`;
const MidY = styled.div`
  display: flex;
  position: relative;
  left: 20%;
`;
const MidZ = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: inline-block;
  img {
    margin-bottom: 1rem;
    display: block;
  }
  #mail {
    margin-top: 3.7rem;
  }
`;
const Right = styled.div`
  display: block;
  p {
    position: relative;
    left: 8%;
    top: 10%;
  }
`;
const Block = styled.div`
  display: flex;
  position: relative;
  top: -0.5rem;
`;
const Content = styled.div`
  width: 30%;
  height: 80vh;
  position: relative;
  left: 15%;
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
    z-index: 100;
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
    .media {
      display: flex;
      img {
        margin-top: 1.2rem;
        margin-left: 1.6rem;
      }
      a {
        display: inline;
        z-index: 1000;
        position: relative;
        left: 2%;
      }
    }
  }
`;
const Submit = styled.div`
  position: absolute;
  right: 10%;
  background-color: white;
  width: 28rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  height: 80vh;
  top: 8%;
  border-radius: 1.2rem;
  padding: 2rem 0 0 2rem;
  input {
    width: 90%;
    height: 2.5rem;
    margin-bottom: 1.3rem;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
    border-width: 1.9px;
    border-color: grey;
    &::placeholder {
      font-size: 0.95rem;
    }
    &:focus {
      border-color: #e35bd1;
    }
    color: grey;
    font-weight: 500;
  }

  p {
    padding-top: 4%;

    font-weight: bold;
    color: grey;
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
      background-color: #254fd4;
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
    color: grey;
    font-weight: bold;
    font-size: 1.4rem;
  }
  button {
    position: relative;
    bottom: -2.5rem;
    width: 85%;
    position: relative;
    left: 2.3%;
    height: 2.8rem;
    border: none;
    border-radius: 1rem;
    background-color: #ff3d8b;
    color: white;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background-color: #d431b4;
      letter-spacing: 1px;
    }
    &:focus {
      transform: scale(0.95);
    }
  }
  @media (max-width: 768px) {
    left: 5.6%;
  }
`;

export default Contact;
