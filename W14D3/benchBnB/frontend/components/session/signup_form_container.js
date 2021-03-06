import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(createUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);