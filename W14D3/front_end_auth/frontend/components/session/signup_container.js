import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

const SignupContainer = connect(null, mapDispatchToProps)(Signup);
 
export default SignupContainer;