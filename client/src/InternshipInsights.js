import styled from "styled-components";

export const InternshipInsights = () => {
  return (
    <>
      <Wrapper>
        <InsightsDescription>
          <h2>Internship Insights</h2>
          <p>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic.
          </p>
        </InsightsDescription>
        <GraphDiv>
          <GraphViews>
            <ThisWeek>This Week</ThisWeek>
            <ThisMonth>This Month</ThisMonth>
          </GraphViews>
          <div>
            <SelectDate>Select Date</SelectDate>
          </div>
        </GraphDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 200px;
  margin-left: 50px;
  padding: 30px;
  margin-top: 20px;
  display: flex;
  position: absolute;
  top: 100px;
  width: 74.5%;
`;

const InsightsDescription = styled.div`
  background-color: #f6f5f9;
  height: 150px;
  width: 300px;
`;

const GraphDiv = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f6f5f9;
  width: 100%;
  padding: 10px;
  height: 30px;
  border-radius: 10px;
`;

const GraphViews = styled.div``;

const ThisWeek = styled.span`
  margin-right: 20px;
  background-color: #793ef5;
  border-radius: 10px;
  color: white;
  padding: 3px;
  position: relative;
  top: 10px;
`;

const ThisMonth = styled.span`
  background-color: white;
  border-radius: 10px;
  position: relative;
  top: 10px;
  height: 30px;
`;

const SelectDate = styled.span`
  position: relative;
  top: 10px;
`;
