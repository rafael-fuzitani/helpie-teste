import React from "react";
import { connect } from "react-redux";

const Clients = props => {
  console.log(props.users.length);
  console.log(props.users);
  if (props.users.length != 0) {
    props.users.map(user => {
      console.log(user);
      return (
        <div>
          <h1>{user.name}</h1>
        </div>
      );
    });
  }

  return (
    <div className="container col s10" style={{ marginLeft: "200px" }}>
      <h1>Clientes</h1>
      <div className="collection">
        {props.users.map((user, index) => {
          return (
            <div className="collection-item" key={index}>
              <h5 className="flow-text">{`${user.name} ${user.surName}`}</h5>

              <p className="flow-text">
                <strong>E-mail: </strong> {user.email}
              </p>
              <p className="flow-text">
                <strong>Telefone: </strong> {user.phone}
              </p>
              <p className="flow-text">
                <strong>CEP: </strong> {user.cep}
              </p>
              <p className="flow-text">
                <strong>Endereço1: </strong> {user.address1}
              </p>
              <p className="flow-text">
                <strong>Endereço2 : </strong> {user.address2}
              </p>
              <p className="flow-text">
                <strong>Data de Nascimento: </strong> {user.birth}
              </p>
              <p className="flow-text">
                <strong>Renda Mensal: </strong> {user.income}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Clients);
