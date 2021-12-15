import React from 'react';
import Header from '../../components/Header';
import { UIButton } from '../../design/button';
import * as S from './style';
import { AiOutlineArrowDown } from 'react-icons/ai';


const Home: React.FC = () => {
    return(
        <S.HomeContainer>
            <Header />
            <S.Introduction>
                <div>
                    <h3>Desenvolvedores prontos para ação</h3>
                    <h2>Seu projeto pronto na velocidade da luz</h2>
                    <UIButton color={'var(--red_light)'} width={'280px'}>
                        <p>Peça uma reunião</p>
                        <AiOutlineArrowDown />
                    </UIButton>
                </div>
            </S.Introduction> 
        </S.HomeContainer>
        
    )
}

export default Home;