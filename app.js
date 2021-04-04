const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    },
    {
      firstName: 'Saint',
      lastName: 'John',
      age: 12,
    },
    {
      firstName: 'Jose',
      lastName: 'Nunez',
      age: 10,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Jaguars',
      teamPoints: 23,
      opponentPoints: 54
    },
    {
      opponent: 'Demons',
      teamPoints: 43,
      opponentPoints: 33
    },
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
    this.players.push(player);
  },
  addGame (opName, ourPoints, opPoints) {
    const game = {
      opponent: opName,
      teamPoints: ourPoints,
      opponentPoints: opPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Robins', 43, 23);

console.log(team.players);
console.log(team.games);
