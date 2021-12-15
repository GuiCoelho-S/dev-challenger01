import React from 'react';
import Header from '../../components/Header';
import * as S from './style';




const Home: React.FC = () => {
    return(
        <S.HomeContainer>
            <Header />
            <S.Introduction>
                <h2>s</h2>
            </S.Introduction> 
        </S.HomeContainer>
        
    )
}

export default Home;