import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";

const { NEW_ABODE } = Mutations;
const { FETCH_ABODES } = Queries;

export default class AbodeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      coordinates: "",
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

  handleSubmit(e, newAbode) {
    e.preventDefault();
    let { name } = this.state;
    newAbode({
      variables: {
        name: this.state.name,
        coordinates: this.state.coordinates
      }
    })
      .then(data => {
        this.setState({
          name: "",
          coordinates: "",
          message: `New abode ${name} created successfully`
        });
      })
  }

  updateCache(cache, { data: { newAbode } }) {
    let abodes;
    try {
      abodes = cache.readQuery({ query: FETCH_ABODES });
    } catch (err) {
      return;
    }
    if (abodes) {
      let abodeArray = abodes.abodes;

      cache.writeQuery({
        query: FETCH_ABODES,
        data: { abodes: abodeArray.concat(newAbode) }
      })
    }
  }

  render() {
    let { name, coordinates } = this.state;
    return (
      <Mutation
        mutation={NEW_ABODE}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newAbode, { data }) => {
          return (
            <div>
              <form onSubmit={e => this.handleSubmit(e, newAbode)}>
                <input
                  type="text"
                  value={ name }
                  onChange={this.update("name")}
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={ coordinates }
                  onChange={this.update("coordinates")}
                  placeholder="Coordinates"
                />
                <input type="submit" value="Create Emblem" />
              </form>
              <p>{this.state.message}</p>
            </div>
          )
        }}
      </Mutation>
    );
  }
}