import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = (e) =>{
  console.log(e)
}

function App() {
  return (
    <div className="App">
       <FacebookLogin
    appId="134906991849923"
    autoLoad={true}
    fields="name,email,picture"
    scope="public_profile,user_friends,user_gender"
    onClick={componentClicked}
    callback={responseFacebook} />
    </div>
  );
}

export default App;
