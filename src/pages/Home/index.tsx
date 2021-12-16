import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import { UIButton } from '../../design/button';
import * as S from './style';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Img02 from '../../assets/img/image-02.png';
import RequestMeeting from '../../components/RequestMeeting';
import { AiFillLike, AiFillGithub, AiFillLinkedin, AiOutlineFullscreenExit } from 'react-icons/ai';

const Home: React.FC = () => {

    const myRef = useRef<null | HTMLDivElement>(null)
    const executeScroll = () => myRef.current!.scrollIntoView() 
    const [ modalAccept, setModalAccept ] = useState(false);

    function functionalModal (value:boolean) {
        setModalAccept(value)
    }

    return( 
        <S.HomeContainer>
        <Header />
        <S.Introduction>
            <div>
                <h3>Desenvolvedores prontos para ação</h3>
                <h2>Seu projeto pronto na velocidade da luz</h2>
                <UIButton 
                    color={'var(--red_light)'} 
                    width={'280px'}
                    onClick={executeScroll}>
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
        <span ref={myRef}></span>
       <RequestMeeting funcModal={functionalModal}/>
       <S.FooterHome>
           <p>Desafio 1 - front-end iniciante</p>
           <p>Iniciativa <span>DEV HALL</span></p>
       </S.FooterHome>
       {
           modalAccept 
           ? (<S.Modal>
               <article>
                   <h3>Obrigado por acessar a página</h3>
                   <AiFillLike />
                   <p>Cheque o console para verificar as informações digitadas </p>
                   <aside>
                        <a href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/" 
                        target="_blank" 
                        rel="noreferrer">
                            <AiFillGithub />
                        </a>
                        <a 
                        href="https://github.com/GuiCoelho-S"
                        target="_blank"
                        rel="noreferrer">
                            <AiFillLinkedin />
                        </a>
                   </aside>
                   <h4>Desenvolvido por <span>Gui Coelho</span></h4>
                   <S.ExitModal>
                        <button onClick={() => setModalAccept(false)}>
                            <AiOutlineFullscreenExit />
                        </button>
                   </S.ExitModal>
               </article>
            </S.Modal>) 
            : <></>
       }
    </S.HomeContainer>
    )
}

export default Home;