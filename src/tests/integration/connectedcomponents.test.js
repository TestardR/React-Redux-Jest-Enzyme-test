import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './../../components/App';
import rootReducer from './../../reducers';
import { render, fireEvent } from '@testing-library/react';

const store = createStore(rootReducer);

describe('Connected Component Full App Integration Tests', () => {
  it('should add Todo item using fireEvent', () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const inputEl = getByTestId('add-todo-input');
    fireEvent.change(inputEl, { target: { value: 'buy milk' } });
    fireEvent.click(getByText('Add Todo'));
    const liEl = container.querySelector('li');
    
    expect(liEl.textContent).toBe('buy milk');
  });
});
