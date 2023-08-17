import React, { Fragment, useState } from 'react'
import Input from '../ui/input'

export default function FormPart_1(props) {
    const [data, setData] = useState({
        projectName: '',
        projectDescription: '',
        client: '',
        contractor: ''
    })

  return (
    <Fragment>
        <Input
            type='text'
            name='Project Name'
            disabled={props.disabled}
            value={data.projectName}
            onInput={e => {
                setData({...data, projectName: e})
                props.onInput({...data, projectName: e})
            }}
            placeholder='Your project name'
        />
        <Input
            type='textarea'
            name='Project Description'
            disabled={props.disabled}
            value={data.projectDescription}
            onInput={e => {
                setData({...data, projectDescription: e})
                props.onInput({...data, projectDescription: e})
            }}
            placeholder='Your project description'
        />
        <Input
            type='text'
            name='Client'
            disabled={props.disabled}
            value={data.client}
            onInput={e => {
                setData({...data, client: e})
                props.onInput({...data, client: e})
            }}
            placeholder='Your client'
        />
        <Input
            type='text'
            name='Contractor'
            disabled={props.disabled}
            value={data.contractor}
            onInput={e => {
                setData({...data, contractor: e})
                props.onInput({...data, contractor: e})
            }}
            placeholder='Your contractor'
        />
    </Fragment>
  )
}
