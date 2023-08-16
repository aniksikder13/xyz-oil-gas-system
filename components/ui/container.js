export default function Container(props) {
  return (
    <div className="max-w-[1200px] m-auto p-3">
        {props.children}
    </div>
  )
}
