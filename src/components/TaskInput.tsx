import { useState, Dispatch, SetStateAction } from "react";
import { LinkNode } from "../linked-list/LinkNode";
import { LinkedList } from "../linked-list/LinkedList";
import styled from "styled-components";

interface Props {
  sll: LinkedList;
  setTasks: Dispatch<SetStateAction<string[]>>;
}

const TaskInput: React.FC<Props> = ({ sll, setTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent screen refresh
    e.preventDefault();

    // perform insertion
    const newLinkNode = new LinkNode(task);
    sll.insertNode(newLinkNode);

    // update tasks
    setTasks(sll.toArray());

    // reset task input
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
        background-color: blue;
        cursor: pointer;
        border: none;
      }
    }
  }
`;

export default TaskInput;
