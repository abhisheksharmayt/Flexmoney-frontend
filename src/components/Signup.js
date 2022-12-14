import React, { useEffect, useState } from 'react'
import loadingSvg from '../images/loading.svg'
import loadingGif from '../images/loading.gif'
import { Link } from 'react-router-dom'

const Signup = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])
    if (loading) {
        return (
            <div className='h-screen w-screen flex justify-center items-center bg-gray-100'>
                <img className='h-48 w-48 overflow-hidden' src={loadingSvg} alt="" />
            </div>
        )
    }
    return (
        <main className='bg-purple-50 flex justify-center items-center w-screen min-h-screen'>
            <section className='bg-white my-10 mx-4 rounded-lg overflow-hidden p-4 lg:flex drop-shadow-md'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full max-w-lg object-cover rounded-lg lg:h-full' src='https://img.freepik.com/free-vector/meditation-illustration-concept_23-2148552131.jpg?w=1380&t=st=1670779514~exp=1670780114~hmac=0e2eea61cf54ee26dc4e22a6ed9f029d8b7ac249008e5309bd32ef5962b8ed3d' alt="yoga_img" />
                </div>
                <div className='w-full pt-4 flex flex-col items-center lg:justify-center lg:pl-4 lg:w-1/2'>
                    <h1 className='text-xl md:text-3xl font-medium'>Welcome to YOGALAND!</h1>
                    <form className='w-full py-5 text-gray-600 flex flex-col items-center' action="">
                        <div className='w-full bg-white mb-5 max-w-sm'>
                            <label className='block font-medium pb-3' htmlFor="name">Name: </label>
                            <input className='w-full max-w-sm border-none rounded-lg overflow:hidden drop-shadow-md' id="name" type="text" placeholder='Rohit Kumar' name="name"/>
                        </div>
                        <div className='w-full bg-white mb-5 max-w-sm'>
                            <label className='block font-medium pb-3' htmlFor="name">Email: </label>
                            <input className='w-full border-none rounded-lg overflow:hidden drop-shadow-md' id="name" type="email" placeholder='something@mail.com' name="email"/>
                        </div>
                        <div className="flex flex-col w-full max-w-sm sm:flex-row">
                            <div className='w-full bg-white mb-5 max-w-sm sm:w-1/3'>
                                <label className='block font-medium pb-3' htmlFor="name">Batch: </label>
                                <select className='drop-shadow-md border-none rounded-md focus:outline-0' name="batch" id="batch">
                                    <option value="first">6-7AM</option>
                                    <option value="second">7-8AM</option>
                                    <option value="third">8-9AM</option>
                                    <option value="fourth">5-6PM</option>
                                </select>
                            </div>
                            <div className='w-full max-w-sm bg-white mb-5 sm:w-2/3'>
                                <label className='block font-medium pb-3' htmlFor="name">DOB:</label>
                                <input className='w-full border-none rounded-lg overflow:hidden drop-shadow-md' id="name" type="date" max={`${year - 18}-${month}-${day}`} min={`${year - 65}-${month}-${day}`} name="dob"/>
                            </div>
                        </div>
                        <Link className='w-full max-w-sm' to='/login'>
                            <p className='text-gray-500 text-sm mb-5'>Already a member? <span className='text-purple-500 underline decoration-1 hover:no-underline'>Login</span></p>
                        </Link>
                        <button className='w-full max-w-sm text-center rounded-lg bg-purple-500 hover:bg-purple-600 my-auto text-white py-3 font-medium text-lg transition-all ease-in-out'>
                            Pay ₹500
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Signup