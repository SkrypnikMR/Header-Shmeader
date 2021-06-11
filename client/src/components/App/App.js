import * as React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const App = () => {
    const [inputValue, setInputValue] = React.useState('');
    const handleMockFunc = event => setInputValue(event.target.value);
    
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
            <Button   
                id="mock"
                onClick={handleMockFunc}
                title="Button"
            >
                title=Button
            </Button>
        </div>
    );
};

export default App;
