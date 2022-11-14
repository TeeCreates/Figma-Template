import styled from "styled-components";
import briefcase from "./assets/briefcase.png";
import dashboard from "./assets/dashboard.png";
import { NavLink } from "react-router-dom";
import medalStar from "./assets/medalStar.png";
import setting from "./assets/setting.png";
import book from "./assets/book.png";
import logo from "./assets/logo.png";
// import medalStar from "./assets/medalStar.svg";

const SideBar = () => {
  return (
    <SideBarStyled>
      <Logo src={logo} alt="" />

      <Button>
        <Icons src={dashboard} alt="dashboard" />

        <TabLinks>Dashboard</TabLinks>
      </Button>
      <Button>
        <Icons src={medalStar}></Icons>

        <TabLinks>Apprenterships</TabLinks>
      </Button>
      <Button>
        <Icons src={book} alt="book" />
        <TabLinks>Internship</TabLinks>
      </Button>
      <Button>
        <Icons src={briefcase} alt="briefcase" />
        <TabLinks>Jobs</TabLinks>
      </Button>
      <Button>
        <Icons src={setting} alt="setting icon" />
        <TabLinks>Settings</TabLinks>
      </Button>
    </SideBarStyled>
  );
};

export default SideBar;

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: auto;
  background-color: white;
  border-radius: 20px;
  width: fit-content;
  padding: 20px;
  height: 98vh;
`;

const Logo = styled.img`
  height: 32px;
  width: 160px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  width: 100%;

  :hover {
    background-color: #665fef33;
    border-radius: 10px;
    border: 1px solid #793ef5;
  }
  :hover && svg {
    stroke: #793ef5;
    fill: #793ef5;
    color: #793ef5;
  }
`;

const Icons = styled.img`
  filter: brightness(0);
  /* the filter attribute allows me to change the icon color from purple to black */
  margin: 10px;

  :hover {
    fill: red;
  }
`;

const TabLinks = styled.span`
  text-decoration: none;
  color: black;
  :hover {
    color: #793ef5;
  }
`;

// const IconSvg = styled.svg`
//   :hover {
//     stroke: #793ef5;
//   }
// `;
