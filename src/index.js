import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
	return (
		<span>Hello</span>
	)
}

function World() {
  return (
    <span>World</span>
  )
}

function HelloWorld() {
  // return (
  //   <div><Hello /> <World /></div>
  // )
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
    </div>
  )
}

function Greeting() {
  var username = "root";
  // var username = undefined;
  // var username = null;
  // var username = false

  return (
    <div>{ username ? `Welcome ${username}` : "Not logged in" }</div>
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number * 2}</li>
    );

    return (
      <div>
        <div>
          {button}
        </div>
        <div>
          {listItems}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
