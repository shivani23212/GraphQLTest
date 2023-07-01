import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DisplayData from "./DisplayData"

function App() {
  // instance of ApolloClient to connect front-end to back-end GQL API
  const client = new ApolloClient( {
    cache: new InMemoryCache(), // to store cache in memory for faster loading
    uri: "http://localhost:4000/graphql" // need /graphql endpoint to access api
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <DisplayData/>
    </div>
    </ApolloProvider>
  );
}

export default App;
