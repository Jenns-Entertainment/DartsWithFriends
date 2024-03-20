import lobbys from '../assets/data/SampleData/lobbys.json'
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
    //this.$router.push({ name: 'Lobby'})
    return fetch(url,requestOptions)
        .then((lobby_id) => { return lobby_id })
        .catch(() => { return false })
  },
  fn_load_lobby_details (lobby_id){
      for (const lobby of lobbys) {
          if (lobby.id === lobby_id) {
            console.log(lobby)
              return lobby;
          }
      }
  
      // Return null if no lobby with the given ID is found
      return null;
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

  /*
loadLobbyDetails (lobby_id){
    const url = '/api/lobby/loadLobbyDetails'
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
       lobby_id
    })
  };
  */
  }
  