import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <a className="modal-close-link" onClick={onClose}>
          &times;
        </a>
        {children}
      </div>
    </div>
  );
};

export default Modal;