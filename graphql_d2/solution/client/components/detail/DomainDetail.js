import React from "react";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import AddGodDomain from "../gods/AddDomain";
import DeleteGodDomain from "../gods/DeleteDomain";

export default class DomainDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ editing: this.state.editing ? false : true });
  }

  render() {
    let addDomain = (
      <div
      onClick={this.toggleEdit}
      style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
      >
        <IconContext.Provider value={{ className: "custom-icon" }}>
          <FaPlus />
        </IconContext.Provider>
      </div>
    );
    if (this.state.editing) {
      addDomain = <AddGodDomain id={this.props.id} toggleEdit={this.toggleEdit} />;
    }
    return (
      <div>
        <h2>Domains</h2>
        { addDomain }
        <ul>
          { this.props.domains.map((domain, idx) => (
            <li key={idx} >
              <p>{ domain }</p>
              <DeleteGodDomain id={this.props.id} domain={domain}/>
            </li> 
          )) }
        </ul>
      </div>
    );
  }
}