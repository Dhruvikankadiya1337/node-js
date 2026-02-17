const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
