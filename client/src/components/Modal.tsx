import IconButton from "./buttons/IconButton";
import CloseIcon from "../../public/icons/close.svg?react";

interface ModalProps {
  children: React.ReactNode;
  isShowModal: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isShowModal, onClose }) => {
  const handleCloseOutModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleCloseOutModal}
      className={`transition-all duration-[400ms] absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`transition-all delay-150 duration-[400ms] bg-white rounded-md shadow-md w-[50vw] m-w-[500px] m-h-[300px] px-6 py-5 flex flex-col ${
          isShowModal
            ? "translate-y-0  opacity-100"
            : "translate-y-2/3  opacity-0"
        }`}
      >
        <IconButton
          className="w-[15px] self-end"
          icon={<CloseIcon />}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
