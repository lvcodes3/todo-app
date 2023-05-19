// dependencies
import { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

// data structures
import { LinkNode } from "../linked-list/LinkNode";
import { LinkedList } from "../linked-list/LinkedList";

// defining passed in props
type TaskInputProps = {
  sll: LinkedList;
  setTasks: Dispatch<SetStateAction<string[]>>;
};

const TaskInput = (props: TaskInputProps) => {
  // props
  const { sll, setTasks } = props;

  // states
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
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Insert</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 75%;
  padding-bottom: 10px;
  /*border: 1px solid black;*/

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    border: 2px solid black;

    input {
      box-sizing: border-box;
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
      border: none;
      border-left: 2px solid black;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;

    form {
      flex-direction: column;

      input {
        width: 100%;
        border: none;
      }

      button {
        width: 100%;
        height: 25px;
        border: none;
        border-top: 2px solid black;
      }
    }
  }
`;

export default TaskInput;
