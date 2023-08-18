'use client'
import { useState } from 'react'
import Button from '../ui/button'
import FormPart_1 from './form_part_1'
import FormPart_2 from './form_part_2'

export default function Form() {
    const [nextStep, setNextStep]= useState(false)
    const [formData, setFormData] = useState({})

    const onFormHandler = (e) => {
        e.preventDefault()
        if(!formData.projectName || !formData.projectDescription || !formData.client || !formData.contractor) {
            alert('Please fill all fields')
            return
        }

        let data = []
        if(JSON.parse(localStorage.getItem('formData'))) {
            data= [...JSON.parse(localStorage.getItem('formData')), formData]
        } else {
            data.push(formData)
        }

        localStorage.setItem('formData', JSON.stringify(data))

        window.location.href = '/view-data'
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
          {!nextStep && <Button onClick={() => setNextStep(true)}>
              Next
          </Button>}
          {nextStep && <Button type='submit'>
              Submit
          </Button>}
        </div>
    </form>
  )
}
