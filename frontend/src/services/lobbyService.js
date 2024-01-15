
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
    return fetch(url,requestOptions)
        .then(() => { return true })
        .catch(() => { return false })
  }
  }
  