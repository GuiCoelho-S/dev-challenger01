import * as S from './style';

import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header:React.FC = () => {

    return(
            <S.ContainerHeader>
                <h1>Meu freela</h1>
                <S.SocialMedias>
                    <a href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/" 
                    target="_blank" 
                    rel="noreferrer"><FaLinkedinIn /></a>
                    
                    <a 
                    href="https://www.instagram.com/tips_frontcoelho/"
                    target="_blank" 
                    rel="noreferrer">
                        <FaInstagram /></a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" 
                    target="_blank" 
                    rel="noreferrer"><FaTwitter /></a>
                </S.SocialMedias>
            </S.ContainerHeader>      
    )
}

export default Header;