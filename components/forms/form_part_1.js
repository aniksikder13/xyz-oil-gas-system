import React, { Fragment } from 'react'
import Input from '../ui/input'

export default function FormPart_1() {
  return (
    <Fragment>
        <Input
            type='text'
            name='Project Name'
            placeholder='Your project name'
        />
        <Input
            type='textarea'
            name='Project Description'
            placeholder='Your project description'
        />
        <Input
            type='text'
            name='Client'
            placeholder='Your client'
        />
        <Input
            type='text'
            name='Contractor'
            placeholder='Your contractor'
        />
    </Fragment>
  )
}
