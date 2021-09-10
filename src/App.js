import './App.css';
import PaymentSchedule from './contexts/Schedule';
import View from './components/pages/View';

const App = () => (
    <div className="App">
        <PaymentSchedule>
            <View/>
        </PaymentSchedule>
    </div>
);

export default App;
