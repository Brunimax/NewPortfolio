import * as S from "../../style";
import { useRef, useState, useEffect } from "react";
import SocialMediaBox from "../../../../components/SocialBox";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";
import MainLogo from "../../../../assets/svgComponents/MainLogo";
import { typingFunction } from "./functions";

interface MainComponentContract {
    isMobile: boolean;
}

const MainComponent = ({ isMobile }: MainComponentContract) => {
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const ref = useRef<HTMLParagraphElement>(null);
    const occupation: string = "Desenvolvedor Web";

    useEffect(() => {
        if (
            !isInitial &&
            ref!.current!.innerHTML.length !== occupation.length
        ) {
            typingFunction(ref!.current!, occupation);
            return;
        }
        setIsInitial(false);
    }, [isInitial]);

    return (
        <S.Main id="start">
            <div className={`${!isInitial ? "animeLeft" : ""} centralizer`}>
                <S.MainContentContainer>
                    <div className="nameLogoContainer">
                        <S.MyInfoContainer>
                            <S.Name>Bruno Medrado</S.Name>
                            <S.Occupation ref={ref}></S.Occupation>
                            <S.SocialMediaContainer>
                                <SocialMediaBox url="https://www.linkedin.com/in/bruno-medrado-5bb610214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                    <Linkedin />
                                </SocialMediaBox>
                                <SocialMediaBox url="https://github.com/Brunimax/">
                                    <GitHub />
                                </SocialMediaBox>
                                <SocialMediaBox url="https://instagram.com/medrado.bruno?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
                                    <Instagram />
                                </SocialMediaBox>
                            </S.SocialMediaContainer>
                        </S.MyInfoContainer>
                        {!isMobile && (
                            <S.MainImgContainer>
                                <MainLogo />
                            </S.MainImgContainer>
                        )}
                    </div>
                </S.MainContentContainer>
            </div>
        </S.Main>
    );
};

export default MainComponent;
