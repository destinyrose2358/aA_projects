import { connect } from "react-redux";
import BenchIndex from "./bench_index";
import { fetchBenches } from "../actions/bench_actions";

const mapStateToProps = ({ entities }) => ({
  benches: Object.values(entities.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex)
