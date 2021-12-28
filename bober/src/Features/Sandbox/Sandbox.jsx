import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { decrement, DECREMENT_COUNTER, increment, INCREMENT_COUNTER } from './TestReducer'

const Sandbox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data)
    return (
        <div>
            <h1>Hello Everyone!</h1>
            <h3>The data is {data}</h3>
            <Button onClick={() => dispatch(increment(10))} content="Increment" color="green" />
            <Button onClick={() => dispatch(decrement(10))} content="Decrement" color="red" />
        </div>
    )
}

export default Sandbox
