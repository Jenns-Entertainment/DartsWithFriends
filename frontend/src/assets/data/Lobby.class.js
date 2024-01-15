export default class Lobby {
    constructor (lobbyCode, password, amountPlayers, private, rooleset, score, outtype, legs, sets) {
      this.lobbyCode = lobbyCode
      this.password = password
      this.amountPlayers = amountPlayers
      this.private = private
      this.rooleset = rooleset
      this.score = score
      this.outtype = outtype
      this.legs = legs
      this.sets = sets
    }
  }
  