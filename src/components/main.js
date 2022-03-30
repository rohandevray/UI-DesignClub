import React from "react";
import styled from "styled-components";
import car from "../images/lo.svg";
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
          <h1>Nitk racing</h1>
          <h2>nitk adress </h2>
          <h2>nitk contact </h2>
          <p>Links of intsa ,clg website, linkedib</p>
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
              <input type="checkbox" name="check" id="specs" />
              <label for="check">Phone</label>
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
    top: 50%;
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
    border-width: 1.8px;
    border-color: grey;
    &::placeholder {
      font-size: 0.95rem;
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
  }
  @media (max-width: 768px) {
    left: 5.6%;
  }
`;

export default Contact;
