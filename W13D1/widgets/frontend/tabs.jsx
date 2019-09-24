import React from "react";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};
    this.select = this.select.bind(this);
  }

  select(event) {
    let index = event.currentTarget.getAttribute("index");
    this.setState({selected: parseInt(index)});
  }

  render() {
    let lis = ["watever", "Shmwatever", "waterver"].map((ele, i) => {
      let clsNm = (this.state.selected === i ? "active" : "");
      return (
        <li className="tab" key={i}>
          <h1 className={ clsNm } index={ i } onClick={ this.select }>{ ele }</h1>
          <section>{ele}</section>
        </li>
      );
    });
    return (
      <ul className="tabs">
        { lis }
      </ul>
    )
  }
}