// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ^^ this can be used when you want the links to connect to another page
import SideBar from "./SideBar";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Fragment } from "react";
import { Header } from "./Header";
import { InternshipInsights } from "./InternshipInsights";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Content>
        <SideBar />
        <InsightsDiv>
          <Header />
          <InternshipInsights />
        </InsightsDiv>
      </Content>
    </Fragment>
  );
}

export default App;

const Content = styled.div`
  display: flex;
`;

const InsightsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
