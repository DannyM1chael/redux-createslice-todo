import React from 'react'
import {Checkbox} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/TodoSlice'
import './TodoItem.css'

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='todoItem'>
            <Checkbox
                checked={ done }
                color="secondary"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={ done ? 'todoItem--done' : '' }>{ name }</p>
        </div>
    )
}

export default TodoItem
