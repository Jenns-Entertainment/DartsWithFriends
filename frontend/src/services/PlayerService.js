import Player from '@/assets/data/Player.class'
import users from '../assets/data/SampleData/users.json'

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
    },

    getCurrentSpieler_temp(global_user_id){
        if(global_user_id == null){
            return null
        }else{
            for (const user of users) {
                if (user.userid === global_user_id) {
                console.log(user)
                    return user;
                }
            }
        }
    }

}

