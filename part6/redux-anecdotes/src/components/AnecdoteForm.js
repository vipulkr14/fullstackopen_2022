import { useDispatch } from "react-redux"
import { createAnecdote as create } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(create(content))
    }

    return (
        <div>
            <h2>create new: </h2>
            <form onSubmit={add}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm