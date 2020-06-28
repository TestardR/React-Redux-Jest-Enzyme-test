import todos from './todos';

describe('Todos Reducer Unit Tests', () => {
  it('should return an empty array when initial state and action is undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should update initial state by adding one todo item to the list', () => {
    const addTodoAction = {
      type: 'ADD_TODO',
      id: 1,
      text: 'buy milk',
    };

    expect(todos([], addTodoAction)).toEqual([
      { id: 1, text: 'buy milk', completed: false },
    ]);
  });

  it('should update initial state by adding the second todo item', () => {
    const initialState = [{ id: 1, text: 'buy milk', completed: false }];

    const addTodoAction = {
      type: 'ADD_TODO',
      id: 2,
      text: 'buy sugar',
    };

    expect(todos(initialState, addTodoAction)).toEqual([
      { id: 1, 
        text: 'buy milk', 
        completed: false },
      {
        id: 2,
        text: 'buy sugar',
        completed: false 
      },
    ]);
  });

  it('should toggle incomplete Todo to complete', () => {
    const initialState = [{ id: 1, text: 'buy milk', completed: false }];
    
    const toggleTodoAction = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    expect(todos(initialState, toggleTodoAction)).toEqual([
      { id: 1, text: 'buy milk', completed: true },
    ]);
  });
});
