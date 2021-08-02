import React, { useState } from 'react'


const Contact = () => {
  const [data, setData] = useState({
    fullname :'',
    phone : '',
    email: '',
    msg:''
  })

  const inputEvent = (event)=>{
      const{name, value} = event.target
      setData((preVal)=>{
        return{
          ...preVal,
          [name] : value,
        }
      })
  }

  const formSubmit = (e) => {
        e.preventDefault();
        alert( `My name is ${data.fullname}. My mobile number is ${data.phone}`);
        setData({
          fullname :'',
          phone : '',
          email: '',
          msg:''
        })
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input
                  type="number"
                  name="phone"
                  value={data.phone }
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  placeholder="Mobiel number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}>
                 </textarea>
              </div>
              <div class="col-auto">
                <button className="btn btn-outline-primary mb-3">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;
