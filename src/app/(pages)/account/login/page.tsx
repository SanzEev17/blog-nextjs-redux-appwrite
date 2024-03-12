"use client"
import React, { useState } from 'react'
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
    //TODO: Use Appwrite to submit formData and redirect user to home

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
    return (
        <>
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
                <Button variant="outline">Submit</Button>
            </CardFooter>
        </>
    )
}
