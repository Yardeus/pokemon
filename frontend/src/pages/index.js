import * as React from "react"
import * as s from "./index.module.css"

import { styled } from '@mui/material/styles';
import icon from "../images/icon.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "@mui/material/Button";
import {pokemonAPI} from "../api/api";

const MuiButton = styled(Button)({
    textTransform: 'lowercase;',
    fontSize: 20,
    padding: '10px',
    margin: '5px 3px',
    borderRadius: '44px',
    backgroundColor: '#1986EC;',
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 500,
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
    },
    '&:active': {
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


class IndexPage extends React.Component {

    constructor() {
        super();
        this.state = {
            data: null,
            idPokemon: 1
        }
    }

    componentDidMount() {
        let ctx = this;
        pokemonAPI.getPokemons().then(data => {
            ctx.setState({data: data.data});
        })
    }

    setPokemonId(id) {
        let ctx = this;
        ctx.setState({idPokemon: id});
    }

    render() {
        if (this.state.data) {
            return <>

                <Layout>
                    <Seo title={'pokemon'}/>
                    <div className={s.container}>
                        <div className={s.api}>
                            ПОКЕМОНЫ API
                        </div>
                        <div className={s.touch}>
                            <img src={icon} alt={'touch'}/>

                            <h4>Нажмите на нужного Покемона</h4>
                        </div>

                        <div className={s.buttons}>
                            {this.state.data.map(p => <MuiButton key={p.attributes.id_pokemon}
                                                              onClick={() => {
                                                                  this.setPokemonId(p.attributes.id_pokemon)
                                                              }}>{p.attributes.title}</MuiButton>)}
                        </div>
                        {this.state.data.map(p => {
                            if (p.attributes.id_pokemon === this.state.idPokemon) {
                                return <div className={s.chip}>
                                    <div className={s.name}>
                                        <h1>{p.attributes.title}</h1>
                                    </div>

                                    <img className={s.image} alt={p.attributes.title}
                                         src={'http://localhost:1337' + p.attributes.image.data.attributes.url}/>

                                    <div className={s.description}>
                                        <div>
                                            Снялся в {p.attributes.movies} сериях
                                        </div>
                                        <div>
                                            Id: {p.attributes.id_pokemon}
                                        </div>
                                        <div>
                                            height: {p.attributes.height}
                                        </div>
                                        <div>
                                            attack: {p.attributes.attack}
                                        </div>
                                    </div>
                                </div>
                            } else return null
                        })
                        }

                    </div>
                </Layout>
            </>
        } else return null

    }
}

export default IndexPage
