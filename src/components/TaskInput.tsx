// dependencies
import { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
// data structures
import { LinkNode } from "../linked-list/LinkNode";
import { LinkedList } from "../linked-list/LinkedList";

type TaskInputProps = {
  sll: LinkedList;
  setTasks: Dispatch<SetStateAction<string[]>>;
};

const TaskInput = (props: TaskInputProps) => {
  const { sll, setTasks } = props;

  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent screen refresh
    e.preventDefault();

    // perform insertion
    const newLinkNode = new LinkNode(task);
    sll.insertNode(newLinkNode);

    // update tasks
    setTasks(sll.toArray());

    // reset task input state
    setTask("");
  };

  return (
    <Container>
      <h2>Insert a Task:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Insert</button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  padding-bottom: 10px;
  /*border: 1px solid black;*/

  h2 {
    text-align: center;
  }

  form {
    div {
      display: flex;
      justify-content: center;
      border: 2px solid black;

      input {
        width: 85%;
        height: 25px;
        border: none;
      }
      input:focus {
        outline: none;
      }

      button {
        width: 15%;
        font-weight: 600;
        color: white;
        background-color: #00cc00;
        cursor: pointer;
        border: 2x solid black;
        border-right: none;
        border-top: none;
        border-bottom: none;
      }
    }
  }
`;

export default TaskInput;
