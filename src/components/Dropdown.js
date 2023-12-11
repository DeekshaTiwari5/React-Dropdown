// Importing necessary dependencies and styles
import React, { useState } from "react";
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

// Dropdown component
const Dropdown = (props) => {
    // State to manage the dropdown's visibility
    const [isActive, setIsActive] = useState(false);
    // Options available in the dropdown
    const options = ["Yes", "Probably Not"];

    // Handler for clicking the dropdown button
    const buttonClickHandler = () => {
        setIsActive((prev) => !prev); // Toggles the dropdown visibility
    };

    // Handler for selecting an option from the dropdown
    const optionHandler = (e) => {
        const selectedItem = e.target.textContent; // Getting the selected option
        props.setSelected(selectedItem); // Updating the selected item via props
        setIsActive(false); // Closing the dropdown after selection
    };

    // Rendering the dropdown component
    return (
        <div className="dropdown">
            {/* Heading for the dropdown */}
            <h1>Should we use a dropdown</h1>
            {/* Displaying the currently selected item */}
            <div className="select">{props.selected}</div>
            {/* Dropdown button */}
            <div
               onClick={buttonClickHandler}
               className="dropdown-btn"
               value={props.selected}
               onMouseEnter={(e) => {
                setIsActive(true)
               }}>
                Select <FontAwesomeIcon icon={faAngleDown}/>
            </div>

            {/* Dropdown content displayed when active */}
            {isActive && (
                <div onClick={optionHandler} className="dropdown-content">
                    {/* Mapping over options to create dropdown items */}
                    {options.map((option, index)=> {
                        return <div className="dropdown-item" key={index}>{option}</div>
                    })}
                </div>
            )}
        </div>
    );
};

// Exporting the Dropdown component
export default Dropdown;
