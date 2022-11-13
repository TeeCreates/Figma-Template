import styled from "styled-components";
import briefcase from "./assets/briefcase.png";
import dashboard from "./assets/dashboard.png";
import { NavLink } from "react-router-dom";
// import medalStar from "./assets/medalStar.png";
import setting from "./assets/setting.png";
import book from "./assets/book.png";
import logo from "./assets/logo.png";
import medalStar from "./assets/medalStar.svg";

const SideBar = () => {
  return (
    <SideBarStyled>
      <Logo src={logo} alt="" />

      <Button>
        <Icons src={dashboard} alt="dashboard" />

        <TabLinks href="">Dashboard</TabLinks>
      </Button>
      <Button>
        <IconSvg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 3.44C17.92 4.72 19 6.73 19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2"
            stroke="#1E1E1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.2501 18.4699L19.6001 18.8599C19.2301 18.9499 18.9401 19.2299 18.8601 19.5999L18.5101 21.0699C18.3201 21.8699 17.3001 22.1099 16.7701 21.4799L12.0001 15.9999L7.23008 21.4899C6.70008 22.1199 5.68008 21.8799 5.49008 21.0799L5.14008 19.6099C5.05008 19.2399 4.76008 18.9499 4.40008 18.8699L2.75008 18.4799C1.99008 18.2999 1.72008 17.3499 2.27008 16.7999L6.17008 12.8999C7.25008 14.4999 8.96008 15.6299 10.9501 15.9199C11.2901 15.9799 11.6401 16.0099 12.0001 16.0099C12.3601 16.0099 12.7101 15.9799 13.0501 15.9199C15.0401 15.6299 16.7501 14.4999 17.8301 12.8999L21.7301 16.7999C22.2801 17.3399 22.0101 18.2899 21.2501 18.4699Z"
            stroke="#1E1E1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z"
            stroke="#1E1E1E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </IconSvg>

        <TabLinks href="">Apprenterships</TabLinks>
      </Button>
      <Button>
        <Icons src={book} alt="book" />
        <TabLinks href="">Internship</TabLinks>
      </Button>
      <Button>
        <Icons src={briefcase} alt="briefcase" />
        <TabLinks href="">Jobs</TabLinks>
      </Button>
      <Button>
        <Icons src={setting} alt="setting icon" />
        <TabLinks href="">Settings</TabLinks>
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

const IconSvg = styled.svg`
  /* a {
    stroke: #1e1e1e;
  }
  a.active {
    background: rgba(102, 95, 239, 0.2);
    border: 1px solid #793ef5;
    /* stroke: #793ef5; */
  /* } */
`;
