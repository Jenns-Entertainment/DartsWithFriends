
export default {
    createLobby (lobby){
      const url = '/api/lobby/create'
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         lobby
      })
    };
    this.$router.push({ name: 'Lobby'})
    return fetch(url,requestOptions)
        .then(() => { return true })
        .catch(() => { return false })
  },
  loadLobbyDetails (lobby_id){
    const url = '/api/lobby/loadLobbyDetails'
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
       lobby_id
    })
  };
  return fetch(url,requestOptions)
      .then(() => { return true })
      .catch(() => { return false })
},
  loadLobbies (){
    const url = '/api/lobby/loadLobbies'
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(url,requestOptions)
      .then(() => { return true })
      .catch(() => { return false })
  },
  }
  