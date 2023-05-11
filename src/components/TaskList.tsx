import { Dispatch, SetStateAction } from "react";
import { LinkedList } from "../linked-list/LinkedList";
import styled from "styled-components";
import TaskListButtons from "./TaskListButtons";

interface Props {
  sll: LinkedList;
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
}

const TaskList: React.FC<Props> = ({ sll, tasks, setTasks }) => {
  const handleDone = (index: number) => {
    // perform removal
    sll.removeNode(index);
    // update tasks
    setTasks(sll.toArray());
  };

  return (
    <Container>
      <h2>To Do List:</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <div>
          <TaskListButtons sll={sll} setTasks={setTasks} />
          <div className="tasks-div">
            {tasks.map((task, index) => (
              <div key={index}>
                <p>{task}</p>
                <button onClick={() => handleDone(index)}>Done</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  padding-bottom: 10px;
  /*border: 1px solid black;*/

  h2,
  p {
    text-align: center;
  }

  div {
    /*border: 1px solid black;*/

    .tasks-div {
      border: 1px solid black;

      div {
        display: flex;
        justify-content: space-between;
        border: 1px solid black;

        p {
          padding-left: 10px;
        }

        button {
          width: 10%;
          border: none;
          color: white;
          background-color: green;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
`;

export default TaskList;
