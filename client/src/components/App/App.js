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
                content="Button"
                title="Button"
                name="name"
                type="button"
                value="value"
                isDisabled="false"
            />
        </div>
    );
};

export default App;
