import React from 'react'
import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com'


export default function Contact(){
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_nxuk23u', 'template_l80pm5w', e.target, 'user_xupvMSPUnma18FDiULR3j')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    
    
    
        return (
            <div className="contact-section">
                <div className="card" style={{margin: '30px', padding: '20px'}}>
                    <Form onSubmit={sendEmail}>
                        <div>
                            <h2 className="text-center">Contact</h2>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email1" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Name" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" name="subject" placeholder="Enter subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactemail" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactmessage" className="form-label">Message</label>
                            <textarea className="form-control" name="message" rows="6"></textarea>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                        </div>
            </div>
        )
    }

