import { useState } from "react";
import styled from "styled-components";
import { LinkedList } from "../linked-list/LinkedList";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

// create and initialize the singly linked list to null
const sll = new LinkedList();

const Controller = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <Container>
      <h1>To Do App</h1>
      <TaskInput sll={sll} setTasks={setTasks} />
      <TaskList sll={sll} tasks={tasks} setTasks={setTasks} />
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
