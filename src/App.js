import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import Selection from './components/Selection';
import './App.css';

const OPTIONS = ['PAPER', 'ROCK', 'SCISSORS'];
const RESULTS = ['CONGRATULATIONS YOU WON', 'SORRY YOU LOOSE', 'TRY AGAIN IS A DRAW'];

class App extends Component {
  
  state = {
    option: '',
    aioption: '',
    status: ''
  }

  selectOption = (opt) => {
    // User option
    this.setState({ option: opt });

    // AI option
    let generateOption = Math.floor(Math.random()*3);
    this.setState({ aioption: OPTIONS[generateOption] });
  }

  getResult = (option, aioption) => {
    if (option === '' || aioption === '') {
      return '';
    } else {
      if ((option === OPTIONS[0] && aioption === OPTIONS[1]) || (option === OPTIONS[1] && aioption === OPTIONS[2]) || (option === OPTIONS[2] && aioption === OPTIONS[0])) {
        return RESULTS[0];
      } else if ((option === OPTIONS[0] && aioption === OPTIONS[2]) || (option === OPTIONS[1] && aioption === OPTIONS[0]) || (option === OPTIONS[2] && aioption === OPTIONS[1])) {
        return RESULTS[1];
      } else {
        return RESULTS[2];
      }
    }
  }

  render() {
    return (
      <div className="App">
      <Header as='h1'>Rock - Pappers - Scissor Game</Header>

      <h2>Pick One</h2>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column className="column-image">
            <Selection setOption={this.selectOption} image="../img/paper.png" option={OPTIONS[0]} />
          </Grid.Column>
          <Grid.Column className="column-image">
            <Selection setOption={this.selectOption} image="../img/rock.png" option={OPTIONS[1]} />
          </Grid.Column>
          <Grid.Column className="column-image">
            <Selection setOption={this.selectOption} image="../img/scissors.png" option={OPTIONS[2]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {
        this.state.option !== '' && <div><h2>Option Selected: {this.state.option}</h2><h2>AI Selected: {this.state.aioption}</h2><h2>Results: {this.state.status}</h2></div>
      }
      <div>{this.getResult(this.state.option, this.state.aioption)}</div>
    </div>
    )
  }
}

export default App;
