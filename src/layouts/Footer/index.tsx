import Header from "./components/Header";
import Media from "./components/Media";
import * as S from "./style";

const Footer = () => {
    return (
        <S.Footer>
            <Header />
            <div className="centralizer">
                <S.ContactContainer>
                    <Media />
                </S.ContactContainer>
                <S.BottomMessage>© 2023 / Bruno Medrado / Todos os direitos reservados </S.BottomMessage>
            </div>
        </S.Footer>
    );
};

export default Footer;
