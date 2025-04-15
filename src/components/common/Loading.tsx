const Loading = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-white">
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5 className="text-primary mt-3">Cargando...</h5>
    </div>
  );
};

export default Loading;
