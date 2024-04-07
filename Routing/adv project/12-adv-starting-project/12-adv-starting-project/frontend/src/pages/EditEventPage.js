import React, { Fragment } from 'react'
import EventForm from "../components/EventForm"
import { useRouteLoaderData } from 'react-router-dom'
const EditEventPage = () => {
  const data =useRouteLoaderData('event-details')
 
  return (
    <Fragment>
      <EventForm method="PATCH" event={data.event}/>
    </Fragment>
  )
}

export default EditEventPage