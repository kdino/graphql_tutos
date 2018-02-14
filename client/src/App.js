import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import {
  makeExecutableSchema,
} from 'graphql-tools'; 
import {typeDefs} from './schema';
import ChannelsListWithData from './components/ChannelsListWithData';

const schema = makeExecutableSchema({typeDefs});

const networkInterface = createNetworkInterface({  // specify api host:port
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;