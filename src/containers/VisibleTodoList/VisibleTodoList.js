import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import TodoList from '../../components/TodoList/TodoList';

const mapStateToProps = (state, props) => {
  return {
    todos: selectors.getVisibleTodos(state),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  onTodoClick: id => {
    dispatch(actions.todosToggle(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
