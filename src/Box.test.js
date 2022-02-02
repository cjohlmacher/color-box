import { render } from '@testing-library/react';
import React from 'react';
import Box from './Box';

it('should render a  component', () => {
    render(<Box backgroundColor="aqua" width={50} height={40} deleteBox={() => console.log('Deleted')}/>);
});

it('should match snapshot', () => {
    const {asFragment} = render(<Box backgroundColor="aqua" width={50} height={40} deleteBox={() => console.log('Deleted')}/>);
    expect(asFragment()).toMatchSnapshot();
});