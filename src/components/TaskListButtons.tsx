// dependencies
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
// data structures
import { LinkedList } from "../linked-list/LinkedList";

type TaskListButtonsProps = {
  sll: LinkedList;
  setTasks: Dispatch<SetStateAction<string[]>>;
};

const TaskListButtons = (props: TaskListButtonsProps) => {
  const { sll, setTasks } = props;

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
    color: white;
    background-color: #337ab7;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid black;
  }
`;

export default TaskListButtons;
