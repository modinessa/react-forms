import './App.css';
import {UserForm} from './components/UserForm';
import {ReactHookForm} from './components/ReactHookForm';

function App() {
  return (
		<div className='App'>
			{/*<UserForm />*/}
			<ReactHookForm/>
		</div>
	)
}

export default App;
