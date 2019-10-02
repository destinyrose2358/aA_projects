import {connect} from 'react-redux';
import {selectPokemonItem} from '../../reducers/selectors';
import ItemDetail from './item_detail.jsx';

const mapStateToProps = (state, { match }) => {
  return {
    item: selectPokemonItem(state, match.params.itemId)
  }
};

export default connect(mapStateToProps)(ItemDetail);

