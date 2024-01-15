export default {
  performLogin (username, password){
    const url = '/api/login'
    const data = new FormData()
    data.append('username', username)
    data.append('password', password)
    const requestOptions = {
      method: "POST",
      body : data
    };
    return fetch(url,requestOptions)
        .then((response) => {
          return response.ok
        })
        .catch(() => { return false })
  }
}
