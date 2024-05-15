import { TODOItemType } from "../todo";
import Modal from "./Modal";

interface TODOModalProps {
  todo?: TODOItemType;
  isShowModal: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TODOModal: React.FC<TODOModalProps> = ({
  todo,
  isShowModal,
  setIsShowModal,
}) => {
  return (
    <Modal isShowModal={isShowModal} onClose={() => setIsShowModal(false)}>
      {todo ? (
        <>
          <p className="text-2xl">{todo.name}</p>
          <p className="text-xl">{todo.description}</p>
          <p>id: {todo.id}</p>
          <p>Date creation: {todo.creationDate.toLocaleTimeString()}</p>
        </>
      ) : (
        <h1>There is no todo opened</h1>
      )}
    </Modal>
  );
};

export default TODOModal;
