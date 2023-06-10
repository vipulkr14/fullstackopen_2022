const Header = (props) => {
    return (
      <h1>{props.name}</h1>
    )
}

const Part = (props) => {
    return (
      <p>
          {props.part.name} {props.part.exercises}
        </p>
    )
  }

  const Total = (props) => {
    return (
      <p>Total of {props.sum} exercises</p>
    )
  }

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part}/>)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
       <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total sum={course.parts.reduce((sum,part) => sum + part.exercises , 0 )}/>
        </div>
    )
}

export default Course