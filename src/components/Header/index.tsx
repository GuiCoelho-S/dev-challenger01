import * as S from './style';

import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header:React.FC = () => {

    return(
            <S.ContainerHeader>
                <h1>Meu freela</h1>
                <S.SocialMedias>
                    <a href="/" ><FaLinkedinIn /></a>
                    <a href="/" ><FaInstagram /></a>
                    <a href="/" ><FaTwitter /></a>
                </S.SocialMedias>
            </S.ContainerHeader>      
    )
}

export default Header;