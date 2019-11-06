import React, { useState } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { ADD_GOD_DOMAIN } = Mutations;

const AddGodDomain = props => {
  return (
    <Mutation
      mutation={ADD_GOD_DOMAIN}
    >
      {(addGodDomain, { data }) => {
        const [domain, setDomain] = useState("");
        return (
          <form onSubmit={ e => {
            e.preventDefault();
            addGodDomain({
              variables: { id: props.id, domain }
            }).then(() => props.toggleEdit())
            }}
          >
            <input
              type="text"
              value={ domain }
              onChange={ e => {
                setDomain(e.target.value);
                }
              }
            />
            <input type="submit" value="Add Domain" />
          </form>
        )
      }}
    </Mutation>
  )
}

export default AddGodDomain;