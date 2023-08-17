export default function Button(props) {
  return (
    <button 
        type={props.type} 
        className={`bg-blue-500 px-6 rounded-md py-2 text-white ${props.className}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}
