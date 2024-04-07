import React from 'react'
import MainNavigation from '../components/MainNavigation'

const Error = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>Something went wrong.</h1>
                <h2>Could not find this page.</h2>
            </main>
        </>
    )
}

export default Error