import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/features/authSlice'
import authService from '@/appwrite/authService'

export default function AuthButton() {
    const isAuthenticated = useAppSelector((state) => state.authReducer.auth.isAuthenticated)
    const authButtons = [
        { name: "Login", slug: "/account/login"},
        { name: "Signup", slug: "/account/signup"},
    ]
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        authService.logout()
        .then(()=>dispatch(logout()))
    }
    return (
        <div className='flex gap-3'>
            {isAuthenticated ?
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
            :
            authButtons.map((item, index) => (
                <Button key={index} variant="outline" asChild>
                    <Link href={item.slug}>
                        {item.name}
                    </Link>
                </Button>
            ))
        }
        </div>
    )
}
