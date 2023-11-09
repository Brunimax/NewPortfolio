import SocialMediaBox from "../../../../components/SocialBox";
import * as S from "../../style";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";

const Media = () => {
    return (
        <S.SocialMediaContainer>
            <div>
                <S.Title>E-mail para contato</S.Title>
                <S.Text>medrado.bruno@outlook.com</S.Text>
            </div>
            <div>
                <S.Title>Adicione nas redes</S.Title>
                <S.LinksContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.linkedin.com/in/bruno-medrado-5bb610214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                            <Linkedin />
                        </SocialMediaBox>
                        <div>/Bruno Medrado</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://github.com/Brunimax/">
                            <GitHub />
                        </SocialMediaBox>
                        <div>/brunimax</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://instagram.com/medrado.bruno?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
                            <Instagram />
                        </SocialMediaBox>
                        <div>/medrado.bruno</div>
                    </S.MediaContainer>
                </S.LinksContainer>
            </div>
        </S.SocialMediaContainer>
    );
};

export default Media;
