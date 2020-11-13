import estilo from 'styled-components'

//Componentes
const Content = estilo.section`
    background-color: #fff;
    box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    min-height: 100vh;
    @media(min-width: 700px){
        flex-direction: row;
        min-width: 800px;
        max-width: 800px;
    }
`;
const Wrap = estilo.section`
    background-color: #eee;
`;
export{
    Content,
    Wrap
}
