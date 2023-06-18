const Filter = ({textLabel, value, handleChange}) => {
    return (
      <div>
        {textLabel} <input value={value} onChange={handleChange} />
      </div>
    )
  }

  export default Filter