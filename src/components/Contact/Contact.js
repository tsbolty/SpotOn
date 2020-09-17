import React from 'react';

const Contact = ()=>{
  return(
    <div className= "col-lg-4 col-sm-12 parent">
      <form>
        <div className= "form-group">
          <label>Name</label>
          <input className= "form-control input-field" placeholder= "Name" />
        </div>
      </form>
    </div>
  )
}

export default Contact;