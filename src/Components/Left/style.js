import estilo from 'styled-components'

//Componentes
const Left = estilo.article`
    .container{
        width: 100%;
    }
    .col-full{
        margin-top: 10px;
        padding: 10px 1rem;
        width: 100%;
    }
    .col-left{
        width: 30%;
    }
    .col-right{
        width: 70%;
    }
    .row{
        display: flex;
        flex-direction: row;
        margin-top: 15px;
    }
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    .ano, .nome-empresa, p{
        font-family: arial;
    }
    .ano{
        background-color: #333;
        color: #fff;
        padding: 5px 2rem;
    }
    .hero{
        font-size: 6vw;
    }
    .nome-empresa{
        font-size: 5vw;
        font-weight: 600;
    }
    @media(min-width: 700px){
        width: 70%;
        .container{padding: 14rem 0;}
        .col-full{
            margin-top: 10px;
            padding: 10px 1rem;
            width: 100%;
        }
        .col-left{
            width: 30%;
        }
        .col-right{
            width: 70%;
        }
        .row{flex-direction: row;}
        .nome-empresa{
            font-size: 1.4vw;
        }
        .hero{
            font-size: 2.3vw;
        }
    }
`;

export{
    Left
}
