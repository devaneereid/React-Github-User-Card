import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    userText: []
  };

  componentDidMount() {
    axios 
      .get(`https://api.github.com/users/devaneereid`)
      .then(res => {
        this.setState({
          users: res.data.message
        });
        console.log(res)
      })
      .catch(err => console.log('Check for User Errors', err));

      axios 
        .get(`https://api.github.com/users/devaneereid/followers`)
        .then(res => {
          this.setState({
            userText: res.data
          });
          console.log(res)
        })
        .catch(err => console.log('Check for Follower Errors', err));
    }


  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
