import * as axios from "axios";

export const backendUrl = 'http://89.108.77.109:1337'

const instance = axios.create({
//настройки
    baseURL: backendUrl+'/api/',

});

export const pokemonAPI = {
    getPokemons() {
        return instance.get(`pokemons?populate=image`)
            .then(response => response.data)
    },
}