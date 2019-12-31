import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import Selection from './components/Selection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header as='h1'>Rock - Pappers - Scissor Game</Header>

      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Selection image="../img/paper.png" />
          </Grid.Column>
          <Grid.Column>
            <Selection image="../img/rock.png" />
          </Grid.Column>
          <Grid.Column>
            <Selection image="../img/scissors.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
