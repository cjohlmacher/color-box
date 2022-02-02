import { fireEvent, render } from "@testing-library/react";
import BoxList from './BoxList';

const addTestBox = (getByLabelText, getByRole) => {
    const colorInput = getByLabelText('Background Color:');
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const submitButton = getByRole('button');
    fireEvent.change(colorInput,{target: {value: "aqua", name: "backgroundColor"}});
    fireEvent.change(widthInput,{target: {value: 30, name: "width"}});
    fireEvent.change(heightInput,{target: {value: 50, name: "height"}});
    fireEvent.click(submitButton);
}

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('adds a box when the form is submitted', () => {
    const { getByLabelText, getByRole, getByTestId, asFragment } = render(<BoxList />);
    addTestBox(getByLabelText, getByRole);
    const colorBox = getByTestId('box');
    expect(colorBox).toHaveStyle('background-color: aqua');
    expect(colorBox).toHaveStyle('width: 30px');
    expect(colorBox).toHaveStyle('height: 50px');
    expect(colorBox).toBeInTheDocument();

});

it('deletes a box when a delete button is clicked', () => {
    const { getByLabelText, getByRole, getByTestId } = render(<BoxList />);
    addTestBox(getByLabelText, getByRole);
    const colorBox = getByTestId('box');
    const deleteButton = getByRole('button', {name: 'X'});
    fireEvent.click(deleteButton);
    expect(colorBox).not.toBeInTheDocument();
})