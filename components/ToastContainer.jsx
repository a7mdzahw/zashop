import Toast from "../components/Toast";

const ToastContainer = ({ toasts }) => {
  return (
    <div className=" position-fixed bottom-0 end-0 p-3">
      {toasts.map((t) => (
        <Toast
          show={t.show}
          onClose={t.onClose}
          title={t.title}
          msg={t.msg}
          key={t.title}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
