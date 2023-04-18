import { render, screen, fireEvent } from '@testing-library/react';
import Tubject1 from './Tubject1';
import React from 'react';

test('incrcountBar', () => {
  render(<Tubject1 />);
 

  const Increment = screen.getByTestId("incr");
  const countBarTest=screen.getByText(1);

  fireEvent.click(Increment); 
  expect(countBarTest).toBeInTheDocument();

});

test( 'decrement Counter', ()=>{
  render(<Tubject1 />)
  const Decrement = screen.getByTestId("decr");
  const countBarTest=screen.getByText(-3);

  fireEvent.click(Decrement)
  expect(countBarTest).toBeInTheDocument();


});

test ('Sample test 3', ()=>{
  render(<Tubject1/>);

  const textElement=screen.getByText("Hello")
  expect(textElement).toBeInTheDocument();
})