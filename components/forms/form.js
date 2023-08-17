'use client'
import { useState } from 'react'
import Button from '../ui/button'
import FormPart_1 from './form_part_1'
import FormPart_2 from './form_part_2'

export default function Form() {
    const [nextStep, setNextStep]= useState(true)
    const [formData, setFormData] = useState({})

    const onFormHandler = (e) => {
        e.preventDefault()
        if(!formData.projectName || !formData.projectDescription || !formData.client || !formData.contractor) {
            alert('Please fill all fields')
            return
        }
        setNextStep(true)
        // console.log(formData)
    }


  return (
    <form className='mt-5 max-w-[800px] bg-white m-auto border px-3 py-4 rounded-md' onSubmit={onFormHandler}>
        <h1 className='text-[1.2rem] mb-4 pb-2 border-b-2'>
            {nextStep ? 'Second' : 'First'} Step
        </h1>
         <FormPart_1 onInput={data => setFormData(data)} disabled={nextStep} />
        { nextStep && <FormPart_2 onInput={data => setFormData({...formData, ...data})} /> }

        <div className='border-t-2 pt-3 flex justify-between'>
          {
            nextStep &&  <Button className='bg-gray-500 mb-3' onClick={() => setNextStep(false)}>
                            Go Back
                        </Button>
          }
          <Button type='submit'>
              {nextStep ? 'Submit' : 'Next'}
          </Button>
        </div>
    </form>
  )
}
