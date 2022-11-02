import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ButtonsTable from '../ButtonsTable';

describe('Test Calculator component', () => {
  // Arrange

  // Act
  const component = render(<ButtonsTable />);
  const component1 = screen.findAllByAltText('AC');
  expect(component1).toBeTruthy();
  // Assert
  test('Testing Calculator render', () => {
    component.getByText('x');
    component.getByText('5');
    component.getByText('9');
    component.getByText('+');
    component.getByText('AC');
    component.getByText('=');
  });
});
