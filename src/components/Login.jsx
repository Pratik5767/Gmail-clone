import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/appSlice'

const Login = () => {
    const dispatch = useDispatch();

    const signInWithGoogle = async() => {
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(setUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
            <div className='p-8 bg-white flex flex-col gap-3 rounded-md'>
                <h1 className='text-center text-xl font-medium mb-5'>LOGIN</h1>

                <GoogleButton onClick={signInWithGoogle}/>
            </div>
        </div>
    )
}

export default Login