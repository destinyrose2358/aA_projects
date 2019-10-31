import React from "react";
import BenchIndexItem from "./bench_index_item";


export default class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render () {
    let benchLis = this.props.benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));
    return (
      <ul>
        { benchLis }
      </ul>
    );
  }
}
