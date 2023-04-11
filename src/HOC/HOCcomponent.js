import React, { useState } from 'react'

const HOCcomponent = (WrappedComponent) => {
    function HocFunction() {
        
        const [counter, setCounter] = useState(0);
        const handclick = () => {
            setCounter(counter + 1);
        }

        return (
            <div>
                <WrappedComponent counter={counter} handclick={handclick} />
            </div>
        )
    }
    return HocFunction;
}

export default HOCcomponent
