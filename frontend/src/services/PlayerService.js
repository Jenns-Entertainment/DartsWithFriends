import Player from '@/assets/data/Player.class'

export default {
    getCurrentSpieler(){
    const url = '/api/spielerInfo'
    return fetch(url)
        .then(response => response.json())
        .then(function(data) {
          return new Player(data.id,data.email, data.nickname, data.password)
        }).catch(() => {
          return null
        })
    },
    getCurrentSpielerGames(){
        const url = '/api/spielerInfo/spiele'
        return fetch(url)
            .then(response => response.json())
            .then(function(data) {
                return data
            }).catch(() => {
                return null
            })
    }

}

