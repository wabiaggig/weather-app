import styled from "styled-components";

export const WeatherCard = styled.div`
  margin: 50px auto;
  border: 0.5px solid #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 250px;
  background: linear-gradient(0deg, #07252d, #0a323d);
  border-radius: 8px;
`;
export const Close = styled.button`
  margin-top: 10px;
  margin-left: 360px;
  border: 1px solid red;
  border-radius: 3px;
  background-color: rgb(238, 4, 4);
  color: aliceblue;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Values = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const WeatherImg = styled.img`
  position: relative;
  -webkit-filter: drop-shadow(0 0 10px #03bcf4);
  outline: none;
`;

export const Text = styled.h5`
  margin-bottom: 30px;
  position: relative;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
    0 0 80px #03bcf4, 0 0 160px #03bcf4;
  text-align: center;

  line-height: 0.7em;
  outline: none;
`;

export const Tittle = styled.h2`
  margin-bottom: 30px;
  position: relative;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
    0 0 80px #03bcf4, 0 0 160px #03bcf4;
  text-align: center;
  text-transform: uppercase;
  line-height: 0.7em;
  outline: none;
`;
