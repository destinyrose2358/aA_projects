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
    let { tabsList } = this.props;
    let { selected } = this.state;
    let lis = tabsList.map((ele, i) => {
      let clsNm = (this.state.selected === i ? "tab active" : "tab");
      return (
        <li className={ clsNm } key={ i } onClick={ this.select } index={ i }>
          <h1  >{ ele }</h1>
        </li>
      );
    });
    return (
      <div className="tabs">
        <ul>
          { lis }
        </ul>
        <section>{ tabsList[selected] }</section>
      </div>
        
    )
  }
}