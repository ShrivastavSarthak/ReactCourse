import React, { Fragment } from 'react'
import { Outlet  } from 'react-router-dom'
import MainNavigation from "../components/MainNavigation"
const Root = () => {
    // const navigation = useNavigation()

    return (
        <Fragment>
            <MainNavigation/>
            <main>
                {/*navigation.state==='loading' && <p>loading...</p>*/} 
                <Outlet />
            </main>
        </Fragment>

    )
}

export default Root