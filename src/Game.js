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
        <div className="row">
          {this.renderMuppetButton(0)}
          {this.renderMuppetButton(1)}
          {this.renderMuppetButton(2)}
          {this.renderMuppetButton(3)}
        </div>
        <div className="row">
          {this.renderMuppetButton(4)}
          {this.renderMuppetButton(5)}
          {this.renderMuppetButton(6)}
          {this.renderMuppetButton(7)}
        </div>
        <div className="row">
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
      shuffledMuppets: shuffle(muppets)
    }
  }

  handleClick(muppet) {
    console.log(muppet + " clicked.");
    this.setState({ shuffledMuppets: shuffle(muppets) });
  }

  render() {
    return <Board muppets={this.state.shuffledMuppets} onClick={(muppet) => this.handleClick(muppet)} />
  }
}

export default Game;