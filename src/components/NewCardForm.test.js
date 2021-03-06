// src/components/test/NewCardForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        onFormSubmit={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});