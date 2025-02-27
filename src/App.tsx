import FriendsList from './components/FriendsList'
import Conversation from './components/Conversation';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

function App() {

  return (
    <AppContainer>
      <h1 style={{fontSize: "3.2em", lineHeight: "1.1"}}>Meet my Friends!</h1>
      <FriendsList />
      <Conversation />
    </AppContainer>
  )
}

export default App;
