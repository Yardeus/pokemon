import * as axios from "axios";

const instance = axios.create({
//настройки
    baseURL: 'http://localhost:1337/api/',

});

export const pokemonAPI = {
    getPokemons() {
        return instance.get(`pokemons?populate=image`)
            .then(response => response.data)
    },
}