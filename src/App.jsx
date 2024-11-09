import cctechLogo from "./CCTech-Logo-Header-Collapsed.svg";
import "./App.css";
import Input from "./Input";

function App() {
    return (
        <>
            <div>
                <a href="https://www.autodesk.com" target="_blank">
                    <img src={cctechLogo} className="logo" alt="CCTech logo" />
                </a>
            </div>
            <h1>QA Coding Challenge</h1>
            <Input />
            <p className="read-the-docs">Task 1: Execute the existing test and fix it.</p>
            <p className="read-the-docs">
                Task 2: Identify positive and negative test cases for the input.
            </p>
            <p className="read-the-docs">
                Task 3: Create more tests for the Input component.
            </p>
        </>
    );
}

export default App;
