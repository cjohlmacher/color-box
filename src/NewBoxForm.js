import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({addBox}) => {
    const defaultFormData = {
        backgroundColor: '',
        width: '',
        height: ''
    }
    const [formData, setFormData] = useState(defaultFormData);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(defaultFormData);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input type="text" name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} onChange={handleChange}></input>
            <label htmlFor="width">Width:</label>
            <input type="number" name="width" id="width" value={formData.width} onChange={handleChange}></input>
            <label htmlFor="height">Height:</label>
            <input type="number" name="height" id="height" value={formData.height} onChange={handleChange}></input>
            <button type="submit">Add Box!</button>
        </form>
    )
};

export default NewBoxForm;