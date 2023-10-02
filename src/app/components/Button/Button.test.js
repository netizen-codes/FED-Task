import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button component', () => {
    const onClickMock = jest.fn();
    const onMouseLeaveMock = jest.fn();
    const { getByText } = render(
        <Button 
            type='primary'
            onClick={onClickMock}
            onMouseLeave={onMouseLeaveMock}
        >
            Click me
        </Button>
    );
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('__primary');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
    fireEvent.mouseLeave(button);
    expect(onMouseLeaveMock).toHaveBeenCalled();
});
