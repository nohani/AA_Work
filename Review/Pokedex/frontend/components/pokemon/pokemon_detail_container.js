import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import { requestAPokemon } from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state) => {
  //returns the piece of state that the container subscribes to
  return {
    pokemon: selectAllPokemon(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  //returns dispatch requestAllPokemon action
  return {
    requestAPokemon: () => dispatch(requestAPokemon())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);