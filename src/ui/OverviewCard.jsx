import styled from "styled-components";

const OverviewCardStyles = styled.div`
  width: 270px;
  border-radius: 25px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: 20px;
`;

const UpperPart = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 24px;
  }
`;

const BottomPart = styled.div`
  p {
    font-size: 18px;
  }
`;

const StyledIcon = styled.div`
  font-size: 40px;
  margin-top: 6px;
  margin-right: 10px;
`;

const CentralData = styled.div`
  font-size: 32px;
  font-weight: 700;
`;
function OverviewCard({ title, icon, data, description, metrics }) {
  return (
    <OverviewCardStyles>
      <UpperPart>
        <StyledIcon>{icon}</StyledIcon>
        <h2>{title}</h2>
      </UpperPart>
      <CentralData>
        {data}
        {metrics}
      </CentralData>
      <BottomPart>
        <p>{description}</p>
      </BottomPart>
    </OverviewCardStyles>
  );
}

export default OverviewCard;
