// dependencies
import { useState } from "react";
import styled from "styled-components";
// data structures
import { LinkedList } from "../linked-list/LinkedList";
// sub-components
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

// create and initialize the singly linked list
const sll = new LinkedList();

const Controller = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <Container>
      <h1>To Do App</h1>
      <TaskInput sll={sll} setTasks={setTasks} />
      {tasks.length !== 0 && (
        <TaskList sll={sll} tasks={tasks} setTasks={setTasks} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*border: 1px solid black;*/

  h1 {
    margin: 5px;
  }
`;

export default Controller;
