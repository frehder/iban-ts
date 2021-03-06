import React from 'react';
import IbanInput from './components/IbanInput';

const App = () => {
    return (
        <div className="App">
            <IbanInput inputStyle={{ padding: '5px 15px', fontSize: 16 }} placeholder="DE12 1234 1234 1234 1234 12" />
        </div>
    );
}

export default App;
