import React, { useState } from 'react';


const Contact = () => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        msg: ''
    });

    const InputEvent = (event) => {
        console.log(event)
        const { name, value } = event.target;

        setData((preval) => {

            return {
                ...preval, [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.name}. <br /> My mobile number is ${data.phone} and email is ${data.email},<br />  Here is what I watn to say ${data.msg}`
        )
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>

            </div>

            <div className='container '>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" name='name' onChange={InputEvent} className="form-control" id="exampleFormControlInput1" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                                <input type="email" name='email' onChange={InputEvent} className="form-control" id="exampleFormControlInput1" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" name='phone' onChange={InputEvent} className="form-control" id="exampleFormControlInput1" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" onChange={InputEvent} id="exampleFormControlTextarea1" rows="3" name="msg"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit"> Submit form</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Contact;
