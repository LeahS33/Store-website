import "./Popup.css"

const Popup = ({ message, onConfirm, onCancel }) => {
    return (
        <div id="popup">
            <div id="popupContent">
                <p>{message}</p>
                <button className="popUpButton" onClick={onConfirm}>Yes</button>
                <button className="popUpButton" onClick={onCancel}>No</button>
            </div>
        </div>
    );
};
export default Popup;

// Popup component for confirmation dialogs
// It displays a message and two buttons for confirmation or cancellation.