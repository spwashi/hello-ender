import {render, screen} from '@testing-library/react';
import App from '../components/app/App';

test('exists', () => {
    render(<App/>);
    const preTag = screen.getByText(/ender/i);
    expect(preTag).toBeInTheDocument();
});
