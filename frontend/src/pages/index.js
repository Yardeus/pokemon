import * as React from "react"
import * as s from "./index.module.css"

import { styled } from '@mui/material/styles';
import icon from "../images/icon.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "@mui/material/Button";
import {backendUrl, pokemonAPI} from "../api/api";

const MuiButton = styled(Button)({
    textTransform: 'lowercase;',
    height: '60px',

    fontSize: 20,
    padding: '20px',
    margin: '5px 3px',
    borderRadius: '44px',
    backgroundColor: '#1986EC;',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    color: 'white',
    fontWeight: 500,
    '&:hover': {
        backgroundColor: '#1986EC',

    },
    '&:active': {
        backgroundColor: '#1986EC',

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
                            <div className={s.api_text}>
                                ПОКЕМОНЫ API
                            </div>

                        </div>
                        <div className={s.addition}>
                            <img src={icon} alt={'touch'}/>

                            <div className={s.addition_text}>Нажмите на нужного Покемона</div>
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
                                        {p.attributes.title}
                                    </div>
                                    <div  className={s.image} >
                                        <img alt={p.attributes.title}
                                             src={backendUrl + p.attributes.image.data.attributes.url}/>
                                    </div>


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
