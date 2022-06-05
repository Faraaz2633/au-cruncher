import React, { useState, useContext, useEffect } from 'react'
import { IoCreateOutline } from 'react-icons/io5';
import { signInWithPopup, signOut } from 'firebase/auth';
import { MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getDocs, collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';

import { AuthContext } from '../../context/Context';
import { auth, provider, db } from '../../firebase/firebase';



const CollegeReview = () => {
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useContext(AuthContext);

  const [listOfPosts, setListOfPosts] = useState([]);
  const [count, setCount] = useState(0);

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      console.log('logout');
      navigate("/collegereview");
      toast.success('Logged out Successfully', {
        style: {
          border: '3px solid orange',
          padding: '16px',
          color: 'white',
          fontWeight: 'semibold',
          background: '#21222D'
        },
        duration: 2000
      });
    })
  }

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log(res);
      toast.success('Logged in Successfully', {
        style: {
          border: '3px solid lightgreen',
          padding: '16px',
          color: 'white',
          fontWeight: 'semibold',
          background: '#21222D'
        },
        duration: 2000
      });
    })
  }

  const loginWithCreatePost = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/collegereview/createpost")
      toast.success('Logged in Successfully', {
        style: {
          border: '3px solid lightgreen',
          padding: '16px',
          color: 'white',
          fontWeight: 'semibold',
          background: '#21222D'
        },
        duration: 2000
      });
    });
  }

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc);
    console.log('delete post executed');
    setCount(count + 1);
    toast.success('Post Deleted Successfully!', {
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

  const postCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postCollectionRef, orderBy("createdAt", "desc"))
      const datas = await getDocs(q);
      console.log(datas)
      setListOfPosts(datas.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getPosts();
  }, [count]);

  return (
    <section className="min-h-screen w-[90%] m-auto pt-12">
      <div className="bg-[#21222D] flex justify-between items-center p-4 md:p-6 rounded-md">
        <div className="text-white font-bold md:text-xl">
          College <span className="text-[#0689ff]">Review</span>
        </div>

        <div className="flex">
          {isAuth ?
            <Link
              title="Create Post"
              to="createpost"
              className="text-white flex font-bold text-xl md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200 mr-2"
            ><IoCreateOutline /></ Link>
            : <button
              title="Create Post"
              onClick={loginWithCreatePost}
              className="text-white flex font-bold text-xl md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200 mr-2"
            ><IoCreateOutline /></ button>}
          {!isAuth ?
            <button
              title="Login"
              className="text-white font-bold text-xl  md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200"
              onClick={googleSignIn}
            ><MdOutlineLogin /></button>
            :
            <button
              title="Logout"
              className="text-white font-bold text-xl md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200"
              onClick={signOutUser}
            ><MdOutlineLogout /></button>
          }
        </div>
      </div>

      <main className="py-4">
        {listOfPosts.length > 0 &&
          listOfPosts.map((post, i) => (
            <div className="bg-[#21222D] p-4 my-4 md:p-6 rounded-md" key={i}>
              <div className="flex justify-between">
                <h2 className="font-semibold md:text-xl text-lg">{post?.title}</h2>
                {isAuth && post?.author?.id === auth?.currentUser?.uid &&
                  <button onClick={() => deletePost(post.id)}>
                    <FaTrashAlt
                      title="Delete post"
                      className="cursor-pointer"
                    />
                  </button>
                }
              </div>
              <p style={{ overflowWrap: 'break-word' }} className="font-light py-3">{post?.review}</p>
              <div className="flex items-center">
                <img
                  src={post?.author?.photoUrl}
                  alt="User-Image"
                  className="rounded-full w-[3rem] h-[3rem]"
                />
                <div className="pl-4">
                  <p className="text-sm"> <span className="font-semibold">{post?.author?.name}</span> - Batch of {post?.passingYear}</p>
                  <p className="text-sm">Published on {post?.publishedDate}</p>
                </div>
              </div>
            </div>
          ))
        }
        {listOfPosts.length < 1 && (
          <div>There are no posts to display here, please click on create post icon to create a new post</div>
        )}
      </main>
    </section>
  )
}

export default CollegeReview