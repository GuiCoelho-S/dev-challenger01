import React from 'react';
import Header from '../../components/Header';
import * as S from './style';

const Home: React.FC = () => {
    return(
        <S.HomeContainer>
            <Header />
            <S.Title>This is a home page</S.Title>    
        </S.HomeContainer>
        
    )
}

export default Home;