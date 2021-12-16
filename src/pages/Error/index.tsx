import React from 'react';
import Header from '../../components/Header';
import * as S from './style';

import ErrorImage from '../../assets/img/errorPage.webp';

const Error: React.FC = () => {
    return(
        <S.ContainerError>
            <Header />
            <main>
                <h1>Opps, algo deu errado !</h1>
                <img src={ErrorImage} alt=""/>
                <p>Você está acessando um <span>URL</span> inválido, volte a página inicial clicando <a href="/">aqui</a></p>
            </main>
        </S.ContainerError>
    )
}

export default Error;