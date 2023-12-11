// Importing the useState hook from React
import { useState } from 'react';
// Importing the Dropdown component from its location
import Dropdown from './components/Dropdown';
// You can add comments to describe the purpose of each section of your code

// App function component
function App() {
  // Using the useState hook to create state variables
  // selected stores the currently selected item in the dropdown
  // setSelected is a function to update the selected item
  const [selected, setSelected] = useState('');

  // Returning JSX that renders the Dropdown component
  // Passing selected and setSelected as props to the Dropdown component
  return (
    <div>
      {/* Rendering the Dropdown component */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
