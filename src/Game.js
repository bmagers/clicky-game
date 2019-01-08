import React from "react";

// create and shuffle array of muppets
const muppets = ["animal", "beaker", "fozzie", "gonzo", "kermit", "miss-piggy", "rizzo", "rowlf", "sam-eagle", "scooter", "statler-and-waldorf", "swedish-chef"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledMuppets = shuffle(muppets);

function ImageButton(props) {
  const imgUrl = "images/" + shuffledMuppets[props.value] + ".jpg";
  return <button><img src={imgUrl} alt="" onClick={props.onClick} /></button>
}

class Board extends React.Component {

  populateImage(i) {
    return <ImageButton value={i} onClick={() => this.props.onClick(shuffledMuppets[i])} />
  }

  render() {
    return (
      <div>
        <div id="row1" className="row">
          {this.populateImage(0)}
          {this.populateImage(1)}
          {this.populateImage(2)}
          {this.populateImage(3)}
        </div>
        <div id="row2" className="row">
          {this.populateImage(4)}
          {this.populateImage(5)}
          {this.populateImage(6)}
          {this.populateImage(7)}
        </div>
        <div id="row3" className="row">
          {this.populateImage(8)}
          {this.populateImage(9)}
          {this.populateImage(10)}
          {this.populateImage(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateMuppets: shuffledMuppets
    }
  }

  handleClick(i) {
    console.log(i + " clicked.");
    this.setState({ stateMuppets: shuffledMuppets });
    console.log("-------");
    console.log(this.state.stateMuppets);
    shuffledMuppets = shuffle(muppets);
  }

  render() {
    return <Board onClick={(i) => this.handleClick(i)} />
  }
}

export default Game;