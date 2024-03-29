import React, { useState } from "react"

const Paragraph =  ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
)

const Heading = ({ heading }) => <h2>{heading}</h2>

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  const maxVote = Math.max( ...votes )
  const mostVotedInd = votes.indexOf(maxVote)

  if (maxVote === 0) {
    return (
      <div>
        <p>no votes yet</p>
      </div>
    )
  }

  return (
    <Paragraph text={anecdotes[mostVotedInd]} votes={maxVote} />
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0))

  const selectedFunc = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }
  const votedFunc = () => {
    const updatedVote = [...votes]
    updatedVote[selected] += 1
    setVoted(updatedVote)
  }

  return (
    <div>
      <Heading heading='Anecdote of the day' />
      <Paragraph text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={votedFunc} text='vote' />
      <Button handleClick={selectedFunc} text='next anecdote' />
      <Heading heading='Anecdote with most votes' />
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App;