import { Chart } from 'components/Chart/Chart';
import { DiagramSelect } from 'components/DiagramSelect/DiagramSelect';
import { Table } from 'components/Table/Table';
import {
  StyledWrapperLeft,
  StyledWrapperRight,
  Wrapper,
} from './StyledDiagramTab';

function DiagramTab() {
  return (
    <>
      <Wrapper>
        <StyledWrapperLeft>
          <Chart />
        </StyledWrapperLeft>
        <StyledWrapperRight>
          <DiagramSelect></DiagramSelect>
          <Table />
        </StyledWrapperRight>
      </Wrapper>
    </>
  );
}

export default DiagramTab;
