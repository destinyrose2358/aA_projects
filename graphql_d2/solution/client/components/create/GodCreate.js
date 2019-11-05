import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { NEW_GOD } = Mutations;

import Queries from "../../graphql/queries";
const { FETCH_GODS } = Queries;

export default class GodCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      type: "God",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e, newGod) {
    e.preventDefault();
    let name = this.state.name;

    newGod({
      variables: {
        name: name,
        type: this.state.type,
        description: this.state.description
      }
    })
      .then(data => {
        console.log(data);
        this.setState({
          message: `New god "${name}" created successfully`,
          name: "",
          type: "god",
          description: ""
        });
      })
  }

  updateCache(cache, { data: { newGod } }) {
    let gods;
    try {
      gods = cache.readQuery({ query: FETCH_GODS });
    } catch (err) {
      return
    }
    if (gods) {
      let godArray = gods.gods;

      cache.writeQuery({
        query: FETCH_GODS,
        data: { gods: godArray.concat(newGod) }
      })
    }
  }

  render() {
    let { name, description, type } = this.state;
    return (
      <Mutation
        mutation={NEW_GOD}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newGod, { data }) => { 
          return (
            <div>
              <form onSubmit={ e => this.handleSubmit(e, newGod) }>
                <input onChange={ this.update("name") } value={ name } type="text" placeholder="Name"/>
                <select value={ type } onChange={ this.update("type") }>
                  <option value="god">God</option>
                  <option value="goddess">Goddess</option>
                </select>
                <textarea onChange={ this.update("description") } value={ description } placeholder="Description"></textarea>
                <input type="submit" value="Create God"/>
              </form>
              <p>{ this.state.message }</p>
            </div>
          )
         }}
      </Mutation>
    );
  }
}