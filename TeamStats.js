 
const team = {

  _players: [
    {firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 13},
    {
      firstName: 'Don',
      lastName: 'Esquela',
      age: 10
    },
    {
      firstName: 'Andrew',
      lastName: 'Davis',
      age: 11
    }
  ],
  _games: [
    {opponent: 'Broncos',
      teamPoints: 43,
      opponentPoints:40
    },
    {
      opponent: 'Patriots',
      teamPoints: 32,
      opponentPoints: 25
    },
    {
      opponent: 'Falcons',
      teamPoints: 54,
      opponentPoints: 15,}
  ],
  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
  },
    
     addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);  
  team.addPlayer('Bugs','Bunny',76);

console.log(team.players);

  team.addGame('Titans',100,98);
  team.addGame('Saints',89,50);
  team.addGame('Raiders',70,90);

console.log(team.games);
