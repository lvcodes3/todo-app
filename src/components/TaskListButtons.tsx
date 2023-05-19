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
      <button className="clear-list-btn" onClick={handleClearList}>
        Clear List
      </button>
      <button className="reverse-list-btn" onClick={handleReverseList}>
        Reverse List
      </button>
      <button className="get-list-size-btn" onClick={handleGetListSize}>
        Get List Size
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
  margin-bottom: 15px;

  .clear-list-btn {
    flex: 1;
    height: 30px;
    color: white;
    background-color: #337ab7;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-right: 1px solid black;
  }

  .reverse-list-btn {
    flex: 1;
    height: 30px;
    color: white;
    background-color: #337ab7;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  .get-list-size-btn {
    flex: 1;
    height: 30px;
    color: white;
    background-color: #337ab7;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-left: 1px solid black;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .clear-list-btn {
      flex: 1 0 auto;
      border: none;
      border-bottom: 1px solid black;
    }

    .reverse-list-btn {
      flex: 1 0 auto;
      border: none;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }

    .get-list-size-btn {
      flex: 1 0 auto;
      border: none;
      border-top: 1px solid black;
    }
  }
`;

export default TaskListButtons;
