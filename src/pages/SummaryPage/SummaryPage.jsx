import StyledContainer from 'components/Container/StyledContainer';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import SideBar from 'components/SideBar/SideBar';

function SummaryPage() {
  return (
    <StyledContainer>
      <SideBar />
      <DiagramTab />
    </StyledContainer>
  );
}

export default SummaryPage;
