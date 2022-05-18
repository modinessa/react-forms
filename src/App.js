import './App.css';
import {UserForm} from './components/UserForm';

//class FirstNameForm extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {value: ''};

//    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
//  }

//  handleChange(event) {
//    this.setState({value: event.target.value});
//  }

//  handleSubmit(event) {
//    alert('A name was submitted: ' + this.state.value);
//    event.preventDefault();
//  }

//  render() {
//    return (
//      <form onSubmit={this.handleSubmit}>
//        <label>
//          Name:
//          <input type="text" value={this.state.value} onChange={this.handleChange} />
//        </label>
//      </form>
//    );
//  }
//}


function App() {
  return (
		<UserForm />
	)
}

export default App;
