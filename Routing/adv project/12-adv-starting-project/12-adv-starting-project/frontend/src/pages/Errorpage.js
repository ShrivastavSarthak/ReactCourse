import React, { Fragment } from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Errorpage = () => {

    const error =useRouteError()
    let title = "An error occurred"
    let message = "Something went wrong"

    if(error.status === 500){
        message = error.data.message
    }
    if(error.status === 404){
        title= "Not Found"
        message ="could not find page"
    }

    return (
        <Fragment>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </Fragment>
    )
}

export default Errorpage