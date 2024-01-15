import Player from '~/assets/data/Player.class'

export default class PlayerApi {
  constructor ($axios) {
    this.axios = $axios
  }

  getCurrentSpieler () {
    return this.axios({
      method: 'get',
      url: 'spielerInfo',
      withCredentials: true
    }).then((response) => {
      return new Player(response.data.id, response.data.email, response.data.nickname)
    }).catch(() => {
      return null
    })
  }
}
