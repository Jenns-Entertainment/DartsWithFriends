export default {
  performLogout(){
    const url = '/api/logout'
    const requestOptions = {
      method: "POST"
    };
    return fetch(url,requestOptions)
        .then(() => { return true })
        .catch(() => { return false })
  }
}
