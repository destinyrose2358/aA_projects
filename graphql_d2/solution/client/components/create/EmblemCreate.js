import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";

const { NEW_EMBLEM } = Mutations;
const { FETCH_EMBLEMS } = Queries;

export default class EmblemCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

  handleSubmit(e, newEmblem) {
    e.preventDefault();
    let { name } = this.state;
    newEmblem({
      variables: {
        name: this.state.name
      }
    })
      .then(data => {
        this.setState({
          name: "",
          message: `New emblem ${ name } created successfully`
        });
      })
  }

  updateCache(cache, { data: { newEmblem } }) {
    let emblems;
    try {
      emblems = cache.readQuery({ query: FETCH_EMBLEMS });
    } catch (err) {
      return;
    }
    if (emblems) {
      let emblemArray = emblems.emblems;

      cache.writeQuery({
        query: FETCH_EMBLEMS,
        data: { emblems: emblemArray.concat(newEmblem) }
      })
    }
  }

  render() {
    let { name } = this.state;
    return (
      <Mutation
        mutation={ NEW_EMBLEM }
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newEmblem, { data }) => {
          return (
            <div>
              <form onSubmit={ e => this.handleSubmit(e, newEmblem) }>
                <input type="text" value={ name } onChange={ this.update("name") } placeholder="Name" />
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