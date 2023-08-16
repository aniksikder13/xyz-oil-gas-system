'use client'

export default function Input(props) {
  return (
    <div className={props.className}>
        <label htmlFor={`${props.name.replace(' ','_')}-input-label`}>
            {props.name}
        </label>
        <input 
            type={props.type}
            value={props.value}
            onChange={e => {props.onInput(e.target.value)}}
            className=' w-full px-3 py-2 border mt-1 mb-4 rounded-sm'
            placeholder={props.placeholder}
            id={`${props.name.replace(' ','_')}-input-label`}
        />
    </div>
  )
}
