export default {
  performRegister (email, nickname, passwort){
    const url = '/api/register'
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email : email,
        nickname : nickname,
        passwort : passwort
      })
    };
    return fetch(url,requestOptions)
        .then(() => { return true })
        .catch(() => { return false })
  }
}
