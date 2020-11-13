import estilo from 'styled-components'

//Componentes
const TextoRotate = estilo.div`
    position: absolute;
    right: -16px;
    top: 10px;
    h1{
        color: #e0ddbd1c;
        font-size: 5rem;
        font-weight: 800;
        position: relative;
        right: 0px;
        top: 2rem;
        transform: rotate(-90deg);
    }
    @media(min-width: 700px){
        top: 33rem;
        width: 30%;
        h1{
            font-size: 7rem;
            right: 12rem;
            transform: rotate(-90deg);
        }
    }
`;
const Experiencia = estilo.div`
    position: absolute;
    left: 1rem;
    width: 20vw;
    .texto_experiencia{
        color: #eee;
        font-size: 1.2rem;
        font-weight: 800;
        line-height: 20px;
        margin-top: 10px;
        position: relative;
    }
    .texto_experiencia:after, .texto_experiencia:before{
        background-color: #fff;
        content: "";
        height: 1px;
        left: 0;
        position: absolute;
        width: 30vw;
    }
    .texto_experiencia:after{
        top: 2.8rem;
    }
    @media(min-width: 700px){
        margin-top: 10px;
        left: -9rem;
        .texto_experiencia{
            color: #333;
        }
        .texto_experiencia:after, .texto_experiencia:before{
            background-color: #333;
            left: 11rem;
            width: 10vw;
        }
    }
`;
const Contato = estilo.ul`
        border-bottom: none;
        position: absolute;
        left: 153px;
        top: 10rem;
    li{
        color: #fff;
        font-family: arial;
        list-style-type: square;
        padding: 10px 0;
    }
    @media(min-width: 700px){
        border-bottom: 1px solid #fff;
        left: 2rem;
        top: 20rem;
        width: 85%;        
    }
`
const Perfil = estilo.figure`
    display: flex;
    flex-direction: row;
    img{
        display: inline-block;
        -webkit-filter: saturate(0);
        filter: saturate(0);
        height: auto;
        width: 30%;
    }
    @media(min-width: 700px){
        flex-direction: row-reverse;
        margin-top: 20px;
        width: 63%;
        img{
            height: 33vh;
            width: 11vw;
        }
    }
`;
const Legenda = estilo.div`
    position: relative;
    h1{
        color: #fff;
        font-size: 8.2vw;
        font-weight: 800;
        line-height: 28px;
        margin-left 10px;
    }
    .profissao{
        color: #fff;
        font-family: arial;
        font-style: oblique;
        line-height: 40px;
        margin-left: 10px;
    }
    @media(min-width: 700px){
        text-align: right;
        width: 130%;
        h1{
            color: #333;
            font-size: 3.2vw;
            line-height: 40px;
            margin-left: 0;
        }
        .profissao{
            color: #333;
            line-height: 40px;
            margin-right: 5px;
        }
    }
`;
const Right = estilo.aside`
    background-color: #333;
    min-height: 37vh;
    position: relative;
    @media(min-width: 700px){
        width: 30%;
    }
`;
export{
    Contato,
    Experiencia,
    Legenda,
    Perfil,
    Right,
    TextoRotate
}
