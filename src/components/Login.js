import React from 'react'

function Login() {
    return (
		<div className="login-container d-flex align-items-center justify-content-center">            
			<form className="login-form text-center">
				<h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
				<div className="form-group">
					<input
						type="text"
						className="form-control rounded-pill form-control-lg"
						placeholder="Username"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control rounded-pill form-control-lg"
						placeholder="Password"
					/>
				</div>
				<div className="forgot-link d-flex align-items-center justify-content-between">
					<div className="form-check">
						<input
							type="checkbox"
							name="remember"
							id="remember"
							className="form-check-input"
						/>
						<label htmlFor="remember">Remember Password</label>
					</div>
				</div>
				<button className="btn btn-custom text-uppercase btn-block rounded-pill btn-lg mt-4">
					Login
				</button>				
			</form>
		</div>
	);
};

export default Login
