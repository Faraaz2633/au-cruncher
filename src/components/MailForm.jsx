import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { ResultContext } from '../context/Context';

const MailForm = () => {
    const [globalResult, setGlobalResult] = useContext(ResultContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = e => {
        e.preventDefault();
        console.log(name);

        emailjs.sendForm('service_fkdp9dv', 'template_gkxabks', e.target, 'tra0gX3sTPe4xFJgB')
            .then(res => {
                console.log(res);
                setName('');
                setEmail('');
                setGlobalResult(0);
            }).catch(err => {
                console.log(err)
            });
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleResultChange = (e) => {
        setGlobalResult(e.target.value);
        console.log(globalResult);
    }
    return (
        <div>
            <form className="max-w-4xl m-auto p-6 h-full" onSubmit={submitForm}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        required=""
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required=""
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="result" className="block mb-2 text-sm font-medium text-gray-300">Your CGPA</label>
                    <input
                        type="text"
                        id="result"
                        name="result"
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your CGPA"
                        required=""
                        onChange={handleResultChange}
                        value={globalResult}
                    />
                </div>
                <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default MailForm