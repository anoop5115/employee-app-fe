import { useDeleteEmployeeMutation } from "../../api-service/employees/employess.api";
import "./modal.css";
const PopupModal = ({
  id,
  show,
  onClose,
}: {
  id: number;
  show: boolean;
  onClose: () => void;
}) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Are you sure?</h2>
        <div className="modal-content">
          Do you really want to delete this employee?
        </div>
        <button
          className="modal-confirm"
          onClick={(e) => {
            deleteEmployee({ id });
            onClose();

            e.stopPropagation();
          }}
        >
          Confirm
        </button>
        <button
          className="modal-close"
          onClick={(e) => {
            onClose();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PopupModal;
