import * as actions from './index';

describe('Test Suite for Actions', () => {
  it('should create an action to add todo', () => {
    const text = 'go shopping';
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text,
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to set visibility filter', () => {
    const filter = 'SHOW_ALL';
    const expectedAction = {
      filter: 'SHOW_ALL',
      type: 'SET_VISIBILITY_FILTER',
    };

    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to toggle todo', () => {
    const id = 0;
    const expectedAction = {
        type: "TOGGLE_TODO",
        id: 0,
    };

    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });
});
