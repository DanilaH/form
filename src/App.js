import React from "react"
import NameInput from "./components/NameInput"
import Promo from "./components/Promo.js"
import "./index.css"

import ReactPhoneInput from "react-phone-input-2"
import "react-phone-input-2/dist/style.css"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      promoCode: "",
      promoBtnState: false,
      agreement: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    const {name, value, type, checked} = event.target

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

  }

  render() {

    return (
      <form className="form" autoComplete="off">
        <h1 className="form__header">Регистрация</h1>
        <a className="form__video" href="https://www.google.ru/">Видеоинструкция</a>
        <div className="form__container">
          
          <div className="form__inputs">

            <NameInput name="firstName" placeholder="Иван" value={this.state.firstName} onChange={this.handleChange} />
            <NameInput name="lastName" placeholder="Иванов" value={this.state.lastName} onChange={this.handleChange} />

            <div className="form__input-container form__input-container--phone">
              <span className="form__input-text">ТЕЛЕФОН</span>

              <ReactPhoneInput 
                preferredCountries={["ru", "fr", "ua", "lt"]}
                inputClass="form__input form__input--phone"
                buttonClass="form__phone-btn"
                dropdownClass="form__phone-dropdown"
                masks={{'ru': '+. (...) ...-..-..'}}
                placeholder="+7 (800) 555-35-35"
                value={this.state.phone} 
                onChange={phone => this.setState({phone})}
                regions={["europe", "asia"]}
              />
            </div>

          </div>

          <Promo promoCode={this.state.promoCode} onChange={this.handleChange} />

          <label className="form__agreement-container">Я принимаю <a href="https://www.google.ru/" className="form__agreement-link">Лицензионный договор-оферту</a>
            <input 
              type="checkbox" 
              name="agreement"
              checked={this.state.agreement}
              onChange={this.handleChange}
            />
            <div className="form__indicator"></div>
          </label>
          
          <div className="form__reg-container">
            <button className="form__submit-btn" disabled={!this.state.agreement}>Зарегистрироваться</button> или <a href="https://www.google.ru/">Войти</a>
          </div>

        </div>
      </form>
    )
  }
}

export default App