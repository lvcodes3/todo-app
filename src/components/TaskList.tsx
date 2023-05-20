// dependencies
import { useState, Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import styled from "styled-components";
// data structures
import { LinkedList } from "../linked-list/LinkedList";
// sub-components
import TaskListButtons from "./TaskListButtons";

// set the app root element for the React Modal
Modal.setAppElement("#root");

// define the props being passed in
type TaskListProps = {
  sll: LinkedList;
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
};

const TaskList = (props: TaskListProps) => {
  // props passed in
  const { sll, tasks, setTasks } = props;

  // states
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  const handleDone = (index: number) => {
    // perform removal on sll
    sll.removeNode(index);
    // update tasks
    setTasks(sll.toArray());
  };

  const openModal = (index: number, task: string) => {
    // set index of the current task that was clicked on
    setIndex(index);
    // set the updated task value to the current task that was clicked on
    setUpdatedTask(task);
    // open the React Modal to display the update form
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent screen refresh
    e.preventDefault();

    // perform data update on sll
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

      {tasks.map((task, index) => (
        <div className="task-container" key={index}>
          <div className="task-section">
            <p>{task}</p>
          </div>
          <div className="update-section">
            <button
              className="update-btn"
              onClick={() => openModal(index, task)}
            >
              Update
            </button>
          </div>
          <div className="done-section">
            <button className="done-btn" onClick={() => handleDone(index)}>
              Done
            </button>
          </div>
        </div>
      ))}

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <ModalContent>
          <h2>Update Task:</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
          <div className="exit-btn-div">
            <button onClick={closeModal}>Exit</button>
          </div>
        </ModalContent>
      </CustomModal>
    </Container>
  );
};

///////////////////////////////////
// styled-components CSS styling //
///////////////////////////////////
const Container = styled.div`
  width: 60%;
  padding-bottom: 10px;
  /*border: 3px solid black;*/

  h2 {
    text-align: center;
  }

  .task-container {
    display: flex;
    border: 2px solid black;
    margin-bottom: 5px;

    .task-section {
      flex: 4;
      border: none;
      border-right: 1px solid black;

      p {
        padding-left: 10px;
      }
    }

    .update-section {
      flex: 1;
      border: none;
      border-left: 2px solid black;
      border-right: 1px solid black;

      .update-btn {
        width: 100%;
        height: 100%;
        border: none;
        color: white;
        background-color: #ff9933;
        font-weight: 600;
        cursor: pointer;
      }
    }

    .done-section {
      flex: 1;
      border: none;
      border-left: 1px solid black;

      .done-btn {
        width: 100%;
        height: 100%;
        border: none;
        color: white;
        background-color: #00cc00;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 90%;

    .task-container {
      flex-direction: column;

      .task-section {
        border: none;
        border-bottom: 1px solid black;
      }

      .update-section {
        border: none;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        display: flex;
        align-items: stretch;

        .update-btn {
          height: 25px;
        }
      }

      .done-section {
        border: none;
        border-top: 1px solid black;
        display: flex;
        align-items: stretch;

        .done-btn {
          height: 25px;
        }
      }
    }
  }
`;

const CustomModal = styled(Modal)`
  overlay {
    /* styles for the overlay */
    background-color: rgba(0, 0, 0, 0.5);
    /* ... add more overlay styles as needed */
  }
`;
const ModalContent = styled.div`
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;

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

  .exit-btn-div {
    padding-top: 10px;
    text-align: center;

    button {
      width: 75px;
      height: 25px;
      font-weight: 600;
      color: white;
      background-color: #cc0000;
      cursor: pointer;
      border: 2px solid black;
    }
  }

  @media (max-width: 1024px) {
    width: 60%;

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

export default TaskList;
