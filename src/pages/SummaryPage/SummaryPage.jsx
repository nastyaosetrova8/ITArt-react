import StyledContainer from 'components/Container/StyledContainer';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import { StyledTitle } from 'components/DiagramTab/StyledDiagramTab';
import SideBar from 'components/SideBar/SideBar';

function SummaryPage() {
  return (
    <StyledContainer>
      <SideBar />
      <div>
        <StyledTitle>Statistics</StyledTitle>
        <DiagramTab />
      </div>
    </StyledContainer>
  );
}

export default SummaryPage;
