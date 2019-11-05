import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { DELETE_GOD } = Mutations;
const { FETCH_GODS } = Queries;

//INLINE STYLING!!!???
const linkStyle = {
  cursor: "pointer",
  fontSize: "10px",
  color: "red"
};

const DeleteGod = props => {
  return (
    <Mutation
      mutation={DELETE_GOD}
      refetchQueries={() => {
        return [
          {
            query: FETCH_GODS
          }
        ];
      }}>
      {(deleteGod, { data }) => (
        <a
          style={linkStyle}
          onClick={e => {
            e.preventDefault();
            deleteGod({ variables: { id: props.id } });
          }}
        >
          <p>Delete</p>
        </a>
      )}
    </Mutation>
  );
};

export default DeleteGod;