import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { DELETE_GOD_DOMAIN } = Mutations;

const DeleteGodDomain = props => {
  return (
    <Mutation
      mutation={DELETE_GOD_DOMAIN}
    >
      {(deleteGodDomain, { data }) => (
        <a
          onClick={e => {
            e.preventDefault();
            deleteGodDomain({ variables: { id: props.id, domain: props.domain }});
          }}
        >
          X
        </a>
      )}
    </Mutation>
  )
}

export default DeleteGodDomain;