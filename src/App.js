import './App.css';
import {UserForm} from './components/UserForm';
import {ReactHookForm} from './components/ReactHookForm.tsx';

function App() {
  return (
		<div className='App'>
			<UserForm />
			<ReactHookForm/>
		</div>
	)
}

export default App;
