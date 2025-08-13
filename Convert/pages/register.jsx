import React from "react";

export default function Register() {
  return (
    <>
      
          <div className="auth-wrapper">
            <h2>Create an Account</h2>
          <form className="auth-form" action="./thankyou.html" method="get">
              <div className="form-group">
                <input type="text" name="fullname" placeholder="Full Name" required="" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required="" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" required="" />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required="" />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="auth-footer">
              Already have an account? <a href="login.html">Login</a>
            </div>
          </div>
      
          
        
      
      
    </>
  );
}
