// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ^^ this can be used when you want the links to connect to another page
import SideBar from "./SideBar";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <SideBar />
    </Fragment>
  );
}

export default App;

const Content = styled.div`
  background-color: lightblue;
  padding: 10px;
`;
