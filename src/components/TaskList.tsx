// dependencies
import { useState, Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import styled from "styled-components";
// data structures
import { LinkNode } from "../linked-list/LinkNode";
import { LinkedList } from "../linked-list/LinkedList";
// sub-components
import TaskListButtons from "./TaskListButtons";

// Set the app root element (or any valid selector)
Modal.setAppElement("#root");

type TaskListProps = {
  sll: LinkedList;
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
};

const TaskList = (props: TaskListProps) => {
  // props
  const { sll, tasks, setTasks } = props;
  // states
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  const handleDone = (index: number) => {
    // perform removal
    sll.removeNode(index);
    // update tasks
    setTasks(sll.toArray());
  };

  // React Modal Functionalities
  const openModal = (index: number) => {
    setIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent screen refresh
    e.preventDefault();

    // perform update on sll
    if (index !== -1) {
      sll.updateNode(index, updatedTask);
    }

    // reset task input state
    setUpdatedTask("");

    // update task list
    setTasks(sll.toArray());

    // close modal
    closeModal();
  };

  return (
    <Container>
      <h2>To Do List:</h2>
      <TaskListButtons sll={sll} setTasks={setTasks} />
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div className="task-container" key={index}>
            <div className="task-section">
              <p>{task}</p>
            </div>
            <div className="button-section">
              <button className="update-btn" onClick={() => openModal(index)}>
                Update
              </button>
              <button className="done-btn" onClick={() => handleDone(index)}>
                Done
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyles}
      >
        <h2>Update Task:</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
            <button type="submit">Update</button>
          </div>
        </form>
        <br />
        <button onClick={closeModal}>Exit</button>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  padding-bottom: 10px;
  /*border: 3px solid black;*/

  h2 {
    text-align: center;
  }

  .tasks-container {
    border: 1px solid black;

    .task-container {
      display: flex;
      border: 1px solid black;

      .task-section {
        width: 75%;
        p {
          padding-left: 10px;
        }
      }

      .button-section {
        width: 25%;
        display: flex;
        justify-content: space-between;

        .update-btn {
          width: 50%;
          border-left: 2px solid black;
          border-right: 1px solid black;
          border-top: none;
          border-bottom: none;
          color: white;
          background-color: #ff9933;
          font-weight: 600;
          cursor: pointer;
        }

        .done-btn {
          width: 50%;
          border-left: 1px solid black;
          border-top: none;
          border-bottom: none;
          border-right: none;
          color: white;
          background-color: #00cc00;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default TaskList;
