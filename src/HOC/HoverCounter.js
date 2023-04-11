import HOCcomponent from './HOCcomponent';

const HoverCounter = (props) => {

  const style = {
    background: '#551d55',
    padding: '100px',
    color: 'white',
    fontSize: '1.5em',
    textAlign: 'justify'
  }
  return (
    <div style={style}>
      <h1 >Higher Order Component (HOC)</h1>
      <p>Higher Order Component is a function that takes a component as a parameter and return the component with enhanced features.</p>
      <p>I've created here one HoverCounter component. In this, one button has defined. when we will hover on this button value will be increased by one and this "HoverCounter" component taking the enhanced functionality from the Higher Order Component which is defined as "HOCcomponent".</p>
    <button style={{color: 'white',background: '#551d55',padding:'5px 20px', }} onMouseOver={props.handclick}>Click </button>
    <p>{props.counter}</p>
    </div>
  )
}

export default HOCcomponent(HoverCounter) ;
