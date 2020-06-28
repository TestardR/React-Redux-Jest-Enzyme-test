import { createStore } from 'redux';
import rootReducer from './../../reducers';
import { addTodo, toggleTodo } from '../../actions';

describe('Redux Store Integration tests', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should add 1 Todo', () => {
    store.dispatch(addTodo('go running'));
    // not the best assertion, better to use a specific id
    const todo = store.getState().todos.find((x) => x.text === 'go running');
    expect(todo.text).toEqual('go running');
  });

  it('should toggle 1 Todo', () => {
    store.dispatch(addTodo('go running'));
    store.dispatch(toggleTodo(1));
    // not the best assertion, better to use a specific id
    const todo = store.getState().todos.find((x) => x.text === 'go running');
    expect(todo.completed).toEqual(true);
  });
});
