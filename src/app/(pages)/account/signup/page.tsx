"use client"
import React, { useState } from 'react'
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import authService from '@/appwrite/authService'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
    /*
    TODO: Use Appwrite to submit formData by validating passwords
    TODO: Redirect to /account/login using router after signup success
    */
    const router = useRouter()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)
            const newUser = await authService.createUser(formData);
            if (newUser) {
                // dispatch(setAuthStatus(false));
                router.push("/login");
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <form onSubmit={(e) => createUser(e)}>

                <CardHeader>
                    <CardTitle className="title-text">Signup</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <Input
                            type='text'
                            name='name'
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={formData.name}
                        />
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
                        <Input
                            type='password'
                            name='password2'
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            value={formData.password2}
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
