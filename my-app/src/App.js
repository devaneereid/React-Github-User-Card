import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const DivStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;
const ImgStyles = styled.img`
  border-radius: 50%;
  border: 3px solid #C6E2FF;
  margin: 20px;
`;
const TextStylesH1 = styled.h1`
  color: #C6E2FF;
`;
const TextStylesH3 = styled.h3`
  padding: 10px;
  color: #C6E2FF;
`;
const DivStyles1 = styled.div`
  background: url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
  background-position: center;
  padding: 10px;
`;


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
          users: res.data
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
    };

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  };

  render(){
    return (
      <>
        <DivStyles1 className="App">
          <TextStylesH1>React GitHub User Cards</TextStylesH1>
            <div className='user'>
              <ImgStyles width='150' 
                    src={this.state.users.avatar_url}
                    alt='user-avatar'></ImgStyles>
              <TextStylesH3>Name: {this.state.users.name}</TextStylesH3>
              <TextStylesH3>GitHub Handle: {this.state.users.login}</TextStylesH3>
              <TextStylesH3>Location: {this.state.users.location}</TextStylesH3>
            </div>
            <DivStyles className='followers'>
              {this.state.userText.map(follower => (
                <div className='img' key={follower.id}>
                  <ImgStyles width='175' 
                       src={follower.avatar_url} 
                       alt=''/>
                  <TextStylesH3>GitHub Handle: {follower.login}</TextStylesH3>
                  <TextStylesH3>URL: {follower.html_url}</TextStylesH3>
                </div>
              ))}
          </DivStyles>
        </DivStyles1>
      </>
    );
  }
}

export default App;
