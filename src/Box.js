import './Box.css';

const Box = ({backgroundColor, width, height, deleteBox}) => {
    const boxStyles = {
        backgroundColor,
        width: width+'px',
        height: height+'px'
    };
    
    const handleDelete = () => {
        deleteBox();
    };

    return (
        <>
            <div className="Box" data-testid="box" style={boxStyles}></div>
            <button name="delete" onClick={handleDelete}>X</button>
        </>
    )
};

export default Box;