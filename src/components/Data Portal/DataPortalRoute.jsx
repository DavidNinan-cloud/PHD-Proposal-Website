import React from 'react'
import IntroPage from '../Reuseable Components/IntroPage'
import DataIngestion from './DataIngestion'
import DataPortal from './DataPortal'

export default function DataPortalRoute() {
  return (
    <div>
        <IntroPage details={'Data Ingestion Layer'} />     
        <DataIngestion/>
        <IntroPage details={'Data Portal'} />    
        <DataPortal/>
    </div>
  )
}
