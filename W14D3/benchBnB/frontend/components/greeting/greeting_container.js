import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    const id = state.session.id;
    const user = state.entities.users[id]

    return {
        currentUser: user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);