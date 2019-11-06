import React from "react";
import { Mutation, Query } from "react-apollo";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa"

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";

const { UPDATE_GOD_ABODE } = Mutations;
const { FETCH_ABODES } = Queries;

export default class AbodeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      abodeId: this.props.abode ? this.props.abode.id : null
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  fieldUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    if (this.state.editing) {
      return (
        <Query query={FETCH_ABODES}>
          {({loading, error, data: query_data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{ error }</p>
            const { abodes } = query_data;
            return (
              <Mutation mutation={UPDATE_GOD_ABODE}>
                {(updateGodAbode, data) => (
                  <div>
                    <form>
                      <select
                        value={ this.state.abodeId }
                        onChange={ e => {
                          this.fieldUpdate("abodeId")(e);
                          updateGodAbode({
                          variables: {godId: this.props.godId, abodeId: e.target.value }
                          }).then(() => this.setState({editing: false }));
                        }}
                      >
                        { abodes.map(abode => (
                          <option
                            key={ abode.id }
                            value={ abode.id }
                          >
                            { abode.name }
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                )}
              </Mutation>
            )
          }}
        </Query>
      );
    } else {
      return (
        <div>
          <div
            onClick={this.handleEdit}
            style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
          >
            <IconContext.Provider value={{ className: "custom-icon" }}>
              <FaPencilAlt />
            </IconContext.Provider>
          </div>
          <h2>{this.props.abode ? this.props.abode.name: ""}</h2>
        </div>
      );
    }
  }
}