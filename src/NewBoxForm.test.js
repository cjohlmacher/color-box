import {render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
    render(<NewBoxForm addBox={() => console.log('Added box')}/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<NewBoxForm addBox={() => console.log('Added box')}/>);
    expect(asFragment()).toMatchSnapshot();
});