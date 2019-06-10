import React from "react"

class Promo extends React.Component {

	constructor() {
		super()

		this.state = {
			promoBtnState: false
		}

	}

	render() {

		let promo = this.state.promoBtnState ? {display: "block"} : {display: "none"}

		return(
			<div className="form__promo-container">
        <a href="#form-input" className="form__promo-btn" onClick={() => this.setState({promoBtnState: !this.state.promoBtnState})}>&#11118; У меня есть промо-код</a>
        <input
          style={promo}
          id="form-input"
          className="form__input form__input--promo"
          type="text"
          maxLength="5" 
          name="promoCode" 
          value={this.props.promoCode} 
          onChange={this.props.onChange} 
        />
      </div>
		)
	}
}

export default Promo
