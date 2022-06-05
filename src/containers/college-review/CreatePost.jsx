import React, { useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/Context';

import { db, auth } from '../../firebase/firebase';

const CreatePost = () => {

    let navigate = useNavigate();

    const [isAuth, setIsAuth] = useContext(AuthContext);

    const getTodaysDate = (today) => {
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        today = day + '/' + month + '/' + year;
        return today;
    }

    let today = getTodaysDate(new Date());

    const [title, setTitle] = useState('');
    const [passingYear, setPassingYear] = useState();
    const [review, setReview] = useState('');

    const postsCollectionRef = collection(db, "posts")

    const createPost = async (e) => {
        e.preventDefault();
        if (!isAuth) {
            toast.error('You must be logged in!', {
                style: {
                    border: '3px solid red',
                    padding: '16px',
                    color: 'white',
                    fontWeight: 'semibold',
                    background: '#21222D'
                },
                duration: 2000
            });

            return;
        }

        await addDoc(postsCollectionRef, {
            title,
            passingYear,
            review,
            author: {
                name: auth?.currentUser?.displayName,
                photoUrl: auth?.currentUser?.photoURL,
                id: auth?.currentUser?.uid
            },
            createdAt: serverTimestamp(),
            publishedDate: today
        });

        navigate("/collegereview");
        toast.success('Post Created Successfully!', {
            style: {
                border: '3px solid lightgreen',
                padding: '16px',
                color: 'white',
                fontWeight: 'semibold',
                background: '#21222D'
            },
            duration: 2000
        });

    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/collegereview');
            toast.error('Please login first!', {
                style: {
                    border: '3px solid red',
                    padding: '16px',
                    color: 'white',
                    fontWeight: 'semibold',
                    background: '#21222D'
                },
                duration: 2000
            });

        }

        console.log('hi')
    }, [])

    return (
        <div className="min-h-screen w-[90%] m-auto pt-12">
            <div className="flex justify-center w-full font-semibold text-xl pb-8">
                College Review
            </div>
            <form className="bg-[#21222D] p-4 rounded-md" onSubmit={createPost}>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="floating_collegeName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        placeholder=" " required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="floating_collegeName"
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >College Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                        name="floating_year"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        placeholder=" " required
                        onInput={(e) => e.target.value = e.target.value.slice(0, 4)}
                        onChange={(e) => setPassingYear(e.target.value)}
                    />
                    <label
                        htmlFor="floating_year"
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Passing Year</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <textarea
                        name="floating_message"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                        placeholder=" " required
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <label
                        htmlFor="floating_message"
                        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Your Review</label>
                </div>

                <button
                    className=" transition duration-200 ease-in-out text-white text-sm bg-[#0689ff] hover:bg-white hover:text-[#0689ff] font-normal px-2 rounded-md py-1"
                    type="submit"
                >Submit</button>

            </form>
        </div>
    )
}

export default CreatePost