import './App.css';
import Form from './components/organisms/Form';
import Chart from './components/organisms/Chart';
import PaymentSchedule from './contexts/Schedule';
import Table from './components/organisms/Table';

const App = () => (
    <div className="App">
        <PaymentSchedule>
            <Form/>
            <Chart/>
            <Table />
        </PaymentSchedule>
    </div>
);

export default App;
