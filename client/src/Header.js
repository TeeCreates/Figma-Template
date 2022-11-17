import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Internships</Title>
      <div>
        <CreateBtn>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4917 10H13.3334"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 10H9.84163"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 13.3332V6.6665"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.66663 10.8665V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Create New Internship
        </CreateBtn>
      </div>
    </HeaderWrapper>
  );
};

const CreateBtn = styled.button`
  height: 45px;
  width: 200px;
  background-color: #793ef5;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  position: absolute;
  right: 1.5%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between;
  width: 80vw; */
  margin-left: 50px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 40px;
`;
