import React from "react";

export default function Login() {
  return (
    <>
      
          <div className="auth-wrapper">
            <h2>Login to Your Account</h2>
            <form className="auth-form" id="loginForm">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required="" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" required="" />
              </div>
              <button type="submit">Login</button>
            </form>
            <div className="auth-footer">
              Don't have an account? <a href="register.html">Register</a>
            </div>
          </div>
      
          
        
      
      
    </>
  );
}
