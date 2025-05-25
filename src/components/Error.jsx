import errorIcon from '../assets/error.jpg';


const Error = () => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh"
        }}>
            <img
                src={errorIcon}
                alt="Error icon"
                width="250px"
                height="250px"
            />
        </div>
    )
};

export default Error;

// This component displays an error icon when there is an error in the application.
