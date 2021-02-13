const Toast = ({ show, onClose, ...props }) => {
  return (
    <>
      {show && (
        <>
          <div className="toast-header">
            <img
              src="/images/phone.jpg"
              className="rounded me-2"
              alt="zahw"
              style={{ height: "12px" }}
            />
            <strong className="me-auto">{props.title}</strong>
            <small>ZaShop</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="toast-body">{props.msg}</div>
        </>
      )}
    </>
  );
};

export default Toast;
