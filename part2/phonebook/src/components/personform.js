

const PersonForm = ({onSubmitHandle, newName, newPhoneNumber, handleChangeName, handleChangeNumber }) => {
    return (
      <form onSubmit={onSubmitHandle}>
          <div>
            Name: <input value={newName} onChange={handleChangeName} />
          </div>
          <div>
            Number: <input value={newPhoneNumber} onChange={handleChangeNumber} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
      </form>
    )
  }

  export default PersonForm