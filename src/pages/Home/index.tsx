import React from 'react';
import Header from '../../components/Header';
import { UIButton } from '../../design/button';
import * as S from './style';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Img02 from '../../assets/img/image-02.png';
import RequestMeeting from '../../components/RequestMeeting';

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
            <S.AboutUs>
                <article>
                    <h3>Nossa iniciativa</h3>
                    <p>Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para tdos os seus clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.</p>
                </article>
                <section>
                    <S.Img src={Img02} alt="imagem de uma pessoa refletindo" />
                </section>
            </S.AboutUs>
           <RequestMeeting />
        </S.HomeContainer>
        
    )
}

export default Home;