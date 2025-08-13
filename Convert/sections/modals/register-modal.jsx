import React from "react";

export default function RegisterModal() {
  return (
    <>
      <div id="register-modal" className="modal hidden">
        
        <div className="modal__overlay" data-close-modal=""></div>
      
        
        <div className="modal__content">
          
          <button className="modal__close" data-close-modal="">×</button>
      
          <h2 className="modal__title">Register as a Partner</h2>
      
          <form className="modal__form">
            <label>
              Name
              <input type="text" name="name" required="" />
            </label>
      
            <label>
              Email
              <input type="email" name="email" required="" />
            </label>
      
            <label>
              Country
              <input type="text" name="country" required="" />
            </label>
      
            <label>
              Partnership Type
              <select name="type" required="">
                <option value="">Select type</option>
                <option value="ib">Introducing Broker (IB)</option>
                <option value="agency">Agency Partner</option>
              </select>
            </label>
      
            <button type="submit" className="btn btn-primary">Submit Registration</button>
          </form>
        </div>
      </div>
      
    </>
  );
}
