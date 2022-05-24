import React, { useContext, useEffect, useState } from 'react'
import logo from '../img/logo.png'
import avatar from '../img/avatar.png'
import { MdShoppingCart, MdLogout, MdAdd } from 'react-icons/md'
import { useNavigate, NavLink } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { isMobileCordova } from '@firebase/util'
import { useStateValue } from '../context/StateProvider'
import { app } from '../firebase.config'
import { actionType } from '../context/reducer'


const Header = () => {
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{ user }, dispatch] = useStateValue()

    const [cartMenu, setCartMenu] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMobileMenu, setIsMobileMenu] = useState(false)



    const login = async () => {
        if (!user) {
            const { user } = await signInWithPopup(firebaseAuth, provider)
            const { refreshToken, providerData } = user
            localStorage.setItem("user", JSON.stringify(providerData[0]))
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            })
        } else {
            setIsMenu(!isMenu)
            isMobileCordova(false)
        }
    }


    return (
        <div className='w-full px-2 lg:px-8 py-2 flex items-center justify-cebter'>
            {/*Desktop Menu*/}
            <div className='w-full hidden md:flex items-center'>
                {/*User Menu*/}
                <div className='mr auto relative'>
                    <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={user ? user?.photoURL : avatar}
                        className='w-14 h-14 cursor-pointer rounded-full shadow-xl'
                        alt=""
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-cardColor rounded-lg shadow-2xl absolute top-16 -left-2 z-30">
                            {
                                user.email === "diego1d_fernandes@outlook.com" && (
                                    <NavLink to={"/createItem"} onClick={() => setIsMenu(false)}>
                                        <p className='px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3'>
                                            New Item <MdAdd />
                                        </p>
                                    </NavLink>
                                )}
                            <p className='px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3'>
                                Lougout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
                {/*Menu Actions*/}
                <div className='flex items-center'>
                    <NavLink to='/'>
                        Menu
                    </NavLink>
                    <NavLink to='/'>
                        <img src={logo} className="w-40 mx-16" alt="" />
                    </NavLink>
                    <NavLink to='/'>
                        Contact
                    </NavLink>
                </div>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="flex items-center gap-2 bg-black px-5 py-4 rounded-md ml-auto cursor-pointer relative"
                    onClick={() => setCartMenu(!cartMenu)}
                >
                    <MdShoppingCart className='text-xl text-white' />
                    <p className='text-base text-white font-semibold'>My Cart</p>
                </motion.div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Header