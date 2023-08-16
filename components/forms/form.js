'use client'
import React, { useState } from 'react'
import FormPart_1 from './form_part_1'
import FormPart_2 from './form_part_2'
import Button from '../ui/button'

export default function Form() {
    const [nextStep, setNextStep]= useState(false)

  return (
    <form className='mt-5 max-w-[800px] bg-white m-auto border px-3 py-4 rounded-md'>
        <h1 className='text-[1.2rem] mb-4 pb-2 border-b-2'>
            {nextStep ? 'Second' : 'First'} Step
        </h1>
        { !nextStep && <FormPart_1 /> }
        { nextStep && <FormPart_2 /> }
        <Button type='submit'>
            {nextStep ? 'Next' : 'Submit'}
        </Button>
    </form>
  )
}