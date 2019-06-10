import React from "react"

function NameInput(props) {
	return(
		<label className="form__input-container">
      <span className="form__input-text">ИМЯ</span>
      <input
        className="form__input" 
        type="text" 
        name={props.name}
        value={props.value} 
        placeholder={props.placeholder}
        onChange={props.onChange} 
      />
    </label>
	)
}

export default NameInput
