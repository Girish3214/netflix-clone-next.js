import React from 'react'
import Image from 'next/image'

import SignInForm from '../components/SignInForm'
function Auth() {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black h-full w-full sm:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image
                        src={'/images/logo.png'}
                        alt="logo"
                        className="h-10 w-32"
                        width={'100'}
                        height={'100'}
                    />
                </nav>
                <SignInForm />
            </div>
        </div>
    )
}

export default Auth
