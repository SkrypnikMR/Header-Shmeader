import * as React from 'react';
import Input from '../UI/Input';

const App = () => {
    const [inputValue, setInputValue] = React.useState('');
    const handleMockFunc = event => setInputValue(event.target.value);
    console.log(inputValue, 'INPUT VALUE');
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input
                width="175px"
                id="mock"
                value={inputValue}
                placeholder="test placeholder"
                label="Test Label"
                errorMessage="errorMessage"
                onChange={handleMockFunc}
            />
        </div>
    );
};

export default App;
