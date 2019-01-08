import React from "react";

const muppets = ["animal", "beaker", "fozzie", "gonzo", "kermit", "miss-piggy", "rizzo", "rowlf", "sam-eagle", "scooter", "statler-and-waldorf", "swedish-chef"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MuppetButton(props) {
  const imgUrl = "images/" + props.name + ".jpg";
  return <button><img src={imgUrl} alt={props.name} onClick={props.onClick} /></button>
}

class Board extends React.Component {

  renderMuppetButton(muppet) {
    const name = this.props.muppets[muppet];
    return <MuppetButton name={name} onClick={() => this.props.onClick(name)} />
  }

  render() {
    return (
      <div>
        <div>
          {this.renderMuppetButton(0)}
          {this.renderMuppetButton(1)}
          {this.renderMuppetButton(2)}
          {this.renderMuppetButton(3)}
        </div>
        <div>
          {this.renderMuppetButton(4)}
          {this.renderMuppetButton(5)}
          {this.renderMuppetButton(6)}
          {this.renderMuppetButton(7)}
        </div>
        <div>
          {this.renderMuppetButton(8)}
          {this.renderMuppetButton(9)}
          {this.renderMuppetButton(10)}
          {this.renderMuppetButton(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledMuppets: shuffle(muppets),
      score: 0,
      topscore: 0,
      clickedMuppets: [],
      message: "Clicky Game"
    }
  }

  handleClick(muppet) {
    let { score, topscore, clickedMuppets } = this.state;
    if (clickedMuppets.includes(muppet)) {
      score = 0;
      this.setState({
        score: 0,
        clickedMuppets: [],
        message: "You guessed incorrectly! Start over."
      });
    } else {
      score++;
      topscore = score > topscore ? score : topscore;
      let message = "You guessed correctly!";
      clickedMuppets = clickedMuppets.concat([muppet]);
      if (score === 12) {
        score = 0;
        clickedMuppets = [];
        message = "Awesome! You got them all!";
      }
      this.setState({ 
        shuffledMuppets: shuffle(muppets),
        score: score,
        topscore: topscore,
        clickedMuppets: clickedMuppets,
        message: message
      });
    }
  }

  render() {
    const { message, score, topscore, shuffledMuppets } = this.state;
    return (
      <div>
        <h2>Click an image to earn a point, but don't click any more than once.</h2>
        <h1>{message}</h1>
        <h1>Score: {score} &nbsp;&nbsp; Top Score: {topscore}</h1>
        <Board muppets={shuffledMuppets} onClick={(muppet) => this.handleClick(muppet)} />
      </div>
    );
  }
}

export default Game;