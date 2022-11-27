import styled from "styled-components";

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: ${(props) => (props.darkMode ? "#343434" : "white")};
  background-color: ${(props) => (props.darkMode ? "#1b373f" : "white")};
  margin-bottom: 3rem;
  padding: 0 2rem;
  transition: all 0.5s ease-in-out;

  & button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-right: 2rem;
    color: ${(props) => (props.darkMode ? "white" : "black")};
    background-color: ${(props) => (props.darkMode ? "#242b2c" : "#0000003a")};
  }

  & button:hover {
    background-color: ${(props) =>
      props.darkMode ? "#a5c9ca2c" : "#0000005e"};
  }
  & button:active {
    background-color: ${(props) =>
      props.darkMode ? "#a5c9cac2" : "#000000a6"};
    color: ${(props) => (props.darkMode ? "black" : "white")};
  }

  & button > span {
    margin-right: 4px;
  }

  & > select {
    background-color: ${(props) => (props.darkMode ? "#0c1f25" : "white")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
    cursor: pointer;
    width: 160px;
    height: 40px;
    border: none;
    border-radius: 3px;
    margin-left: auto;
    border: 2px solid rgb(0, 0, 0, 0.2);
    transition: background-color 0.5s ease-in-out;
  }

  & input {
    border: none;
    border-radius: 4px;
    margin: 0 auto;
  }
`;

export default HeaderBar;
