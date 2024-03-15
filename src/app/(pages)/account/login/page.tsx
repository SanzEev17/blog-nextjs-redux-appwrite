"use client"
import React, { useState } from 'react'
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import authService from '@/appwrite/authService'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/redux/features/authSlice'
import { AppDispatch } from '@/redux/store'

export default function LoginPage() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)
            const userSession = await authService.loginUser(formData);
            if (userSession) {
                const userData = await authService.getCurrentUser()
                if(userData){
                    const {name, email} = userData
                    dispatch(login({name, email }));
                }
                router.push("/");
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={(e) => loginUser(e)}>
                <CardHeader>
                    <CardTitle className="title-text">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <Input
                            type='email'
                            name='email'
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <Input
                            type='password'
                            name='password'
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" type='submit'>
                        {loading ? "Loading..." : "Submit"}
                    </Button>
                    <div>{error}</div>
                </CardFooter>
            </form>
        </>
    )
}
