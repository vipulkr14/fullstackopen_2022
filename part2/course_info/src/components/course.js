const Header = (props) => {
    return (
      <h1>{props.name}</h1>
    )
}

const Part = (props) => {
    console.log('Hello 3', props)
    return (
      <p>
          {props.part.name} {props.part.exercises}
        </p>
    )
  }

  const Total = (sum) => {
    console.log('Hello 4')
    return (
      <p>Number of exercises {sum}</p>
    )
  }

const Content = ({ parts }) => {
    console.log('Hello 5')
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part}/>)}
        </div>
    )
}

const Course = ({ course }) => {
    console.log('Hello 1',course.parts)
    return (
       <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course