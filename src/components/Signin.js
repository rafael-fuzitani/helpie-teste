import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUser,
  updateName,
  updateSurName,
  updateEmail,
  updatePhone,
  updateCep,
  updateAddress1,
  updateAddress2,
  updateBirth,
  updateIncome
} from "../actions/rootActions";
import { bindActionCreators } from "redux";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: "form1"
    };
  }

  handleChange(event) {
    let change = {};

    change[event.target.name] = event.target.value;
    switch (event.target.name) {
      case "name":
        this.props.updateName(event.target.value);
        break;
      case "surName":
        this.props.updateSurName(event.target.value);
        break;
      case "email":
        this.props.updateEmail(event.target.value);
        break;
      case "phone":
        this.props.updatePhone(event.target.value);
        break;
      case "cep":
        this.props.updateCep(event.target.value);
        break;
      case "address1":
        this.props.updateAddress1(event.target.value);
        break;
      case "address2":
        this.props.updateAddress2(event.target.value);
        break;
      case "birth":
        this.props.updateBirth(event.target.value);
        break;
      case "income":
        this.props.updateIncome(event.target.value);
        break;

      default:
        break;
    }
  }

  handleSubmit() {
    let novoCadastro = {
      name: this.props.name,
      surName: this.props.surName,
      email: this.props.email,
      phone: this.props.phone,
      cep: this.props.cep,
      address1: this.props.address1,
      address2: this.props.address2,
      birth: this.props.birth,
      income: this.props.income,
      users: this.props.users
    };

    this.props.addUser(novoCadastro);
    this.props.updateName("");
    this.props.updateSurName("");
    this.props.updateEmail("");
    this.props.updatePhone("");
    this.props.updateCep("");
    this.props.updateAddress1("");
    this.props.updateAddress2("");
    this.props.updateBirth("");
    this.props.updateIncome("");
    this.setState({ formStage: "form1" });
  }

  render() {
    return (
      <div
        style={{ marginLeft: "200px" }}
        className="container form-container col s10"
      >
        <div>
          <h1>Cadastrar</h1>
          <div style={{ marginBottom: "40px" }} class="divider" />
        </div>

        {this.state.formStage == "form1" ? (
          <form>
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={this.props.name}
                onChange={this.handleChange.bind(this)}
              />
            </label>

            <label>
              Sobrenome:
              <input
                type="text"
                name="surName"
                value={this.props.surName}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              E-mail:
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                name="phone"
                value={this.props.phone}
                onChange={this.handleChange.bind(this)}
              />
            </label>
          </form>
        ) : (
          <form>
            <label>
              CEP:
              <input
                type="text"
                name="cep"
                value={this.props.cep}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              Endereço 1:
              <input
                type="text"
                name="address1"
                value={this.props.address1}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              Endereço 2:
              <input
                type="text"
                name="address2"
                value={this.props.address2}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              Data de Nascimento:
              <input
                type="text"
                name="birth"
                value={this.props.birth}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label>
              Renda Mensal:
              <input
                type="text"
                name="income"
                value={this.props.income}
                onChange={this.handleChange.bind(this)}
              />
            </label>
          </form>
        )}
        <div className="button-wrapper ">
          <div className="row">
            <button
              style={{ margin: "10px" }}
              className="waves-effect waves-light btn section"
              onClick={() => this.setState({ formStage: "form1" })}
            >
              Anterior
            </button>
            <button
              style={[
                { margin: "10px" }
                // this.state.formStage === "form2" && { opacity: 0.5 }
              ]}
              className="waves-effect waves-light btn section"
              onClick={() => this.setState({ formStage: "form2" })}
            >
              Próximo
            </button>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={this.handleSubmit.bind(this)}
        >
          Salvar
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    surName: state.surName,
    email: state.email,
    phone: state.phone,
    cep: state.cep,
    address1: state.address1,
    address2: state.address2,
    birth: state.birth,
    income: state.income,
    users: state.users
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUser,
      updateName,
      updateSurName,
      updateEmail,
      updatePhone,
      updateCep,
      updateAddress1,
      updateAddress2,
      updateBirth,
      updateIncome
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
