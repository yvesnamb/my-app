import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  changeText(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="accueil">
        <h3>Ajouts et listes des apprenants</h3>
        <label>Nom </label><input type="text" id="name"></input>
        <label>Prenom </label><input type="text"></input>
        <button type="submit" class="btn btn-success" onClick={this.changeText.bind(this)}>Ajouter</button>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Noms </th>
              <th scope="col">Prenoms</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.name}</td>
              <td></td>
              <td><button type="submit" class="btn btn-danger">Supprimer</button></td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}
export default Accueil;

