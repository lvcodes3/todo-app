import { Dispatch, SetStateAction } from "react";
import { LinkedList } from "../linked-list/LinkedList";
import styled from "styled-components";

interface Props {
  sll: LinkedList;
  setTasks: Dispatch<SetStateAction<string[]>>;
}

const TaskListButtons: React.FC<Props> = ({ sll, setTasks }) => {
  const handleClearList = () => {
    sll.head = null;
    setTasks(sll.toArray());
  };

  const handleReverseList = () => {
    sll.reverse();
    setTasks(sll.toArray());
  };

  const handleGetListSize = () => {
    alert(sll.getSize());
  };
  return (
    <Container>
      <button onClick={handleClearList}>Clear List</button>
      <button onClick={handleReverseList}>Reverse List</button>
      <button onClick={handleGetListSize}>Get List Size</button>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
  /*border: 1px solid black;*/

  button {
    width: 15%;
    height: 30px;
    background-color: gold;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid black;
  }
`;

export default TaskListButtons;
