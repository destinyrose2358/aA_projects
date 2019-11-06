import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import NameDetail from "../detail/NameDetail";
import TypeDetail from "../detail/TypeDetail";
import DescriptionDetail from "../detail/DescriptionDetail";
import DomainDetail from "../detail/DomainDetail";
import AbodeDetail from "../detail/AbodeDetail";
const { FETCH_GOD } = Queries;

const GodDetail = props => {
  return (
    <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        let { god: { id, name, type,description, domains, abode } } = Object.assign({}, data);
        return (
          <div className="detail">
            <NameDetail id={ id } name={ name } />
            <TypeDetail id={ id } type={ type } />
            <DescriptionDetail id={ id } description={ description } />
            <DomainDetail id={ id } domains={ domains } />
            <AbodeDetail godId={ id } abode={ abode }/>
          </div>
        );
      }}
    </Query>
  );
}

export default GodDetail;