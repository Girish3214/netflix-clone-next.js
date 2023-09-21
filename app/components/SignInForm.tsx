'use client'

import Input from './Input'
import React, { useCallback, useState } from 'react'

interface FormData {
    email: string
    username: string
    password: string
}
const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
}
function SignInForm() {
    const [formData, setFormData] = useState<FormData>(INITIAL_STATE)
    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((curr) => (curr === 'login' ? 'register' : 'login'))
    }, [])

    const handleInoutChange = (e: any, name: string) => {
        let value = e.target.value
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70  px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input
                                label="Username"
                                onChange={(e: any) =>
                                    handleInoutChange(e, 'username')
                                }
                                id="username"
                                value={formData.username ?? ''}
                            />
                        )}
                        <Input
                            label="Email"
                            onChange={(e: any) => handleInoutChange(e, 'email')}
                            id="email"
                            type="email"
                            value={formData.email ?? ''}
                        />
                        <Input
                            label="Password"
                            onChange={(e: any) =>
                                handleInoutChange(e, 'password')
                            }
                            id="password"
                            type="password"
                            value={formData.password ?? ''}
                        />
                    </div>
                    <button
                        onClick={toggleVariant}
                        className="bg-red-600 py-3 mt-10 rounded-md w-full hover:bg-red-700 transition"
                    >
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <p className="text-neutral-500 mt-8">
                        {variant === 'login'
                            ? 'First time using Netflix?'
                            : 'Already have an account?'}
                        <span className="text-white ml-1 hover:underline cursor-pointer">
                            {variant === 'login'
                                ? 'Create an account'
                                : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignInForm
