import React from 'react';

const Contact = ()=>{
  return(
    <div className= "col-lg-4 col-sm-12 parent">
      <form>
        <div className= "form-group">
          <label>Your Name</label>
          <input className= "form-control input-field" placeholder= "Name" />
        </div>
        <div className= "form-group">
          <label>Your Email</label>
          <input className= "form-control input-field" placeholder= "Email Address" />
        </div>
        <div className= "form-group">
          <label>Subject</label>
          <input className= "form-control input-field" placeholder= "Subject" />
        </div>
        <div className= "form-group">
          <label>Your Message</label>
          <textarea className= "form-control input-field" placeholder= "Message" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact;