import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/joedenson/followers')
      .then(response => {
        console.log(response.data)
        this.setState({
          users: response.data
        })
      })
      .catch(err => console.log(err));
  }



  render() {

    return (

      <div className="App">

        {this.state.users.map(user => (
          <div className="users">
            <div key={user.id}>{user.login}</div>
            <img src={user.avatar_url} alt={user.login} className='image' />

          </div>

        ))}


      </div>

    );
  }
}

export default App;
