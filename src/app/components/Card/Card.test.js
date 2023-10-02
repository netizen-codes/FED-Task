import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render the title', () => {
    const title = 'Test title';
    const { getByText } = render(<Card title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render the logo', () => {
    const logo = 'https://example.com/logo.png';
    const { getByAltText } = render(<Card logo={logo} title='Test title'/>);
    expect(getByAltText('Test title')).toHaveAttribute('src', logo);
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Card onClick={onClick} />);
    const button = getByText('Explore more');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
