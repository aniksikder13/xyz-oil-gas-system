'use client'
import React, { Fragment, useEffect, useState } from 'react'
import ViewData from '@/components/view-data/ViewData'

export default function page() {
  const [csvData, setCsvData]= useState([])
  useEffect(() => {
    const data= JSON.parse(localStorage.getItem('formData'))
    if (data){
      setCsvData([...data])
    }
  }, [])
 
  return (
    <Fragment>
      <ViewData data={csvData} />
    </Fragment>
  )
}
