import * as S from "../../style";
import H2 from "../../../../components/H2";
import Circle from "../../../../assets/svgComponents/Circle";

interface AboutMeContract {
    isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeContract) => {
    return (
        <S.Section id="aboutMe">
            <div className="centralizer">
                <H2>Sobre mim</H2>
                <S.AboutMeContainer>
                    <div>
                        <p>
                            Olá, sou Bruno Medrado, um entusiasta da tecnologia apaixonado 
                            por desafios e movido pela constante evolução do mundo 
                            digital. Decidi trilhar o fascinante caminho da programação, mergulhando 
                            em um universo repleto de possibilidades e inovações. Minha jornada 
                            profissional tem sido marcada por projetos significativos, nos quais 
                            explorei e aprimorei minhas habilidades. Ao trabalhar com gestão hospitalar, 
                            desenvolvi uma compreensão profunda das nuances que envolvem a integração 
                            de tecnologias para solucionar problemas práticos.
                        </p>
                        <br />
                        <p>
                            Atualmente, tenho a privilegiada oportunidade de contribuir para a evolução 
                            da saúde em Sergipe, atuando como FullStack na Secretaria Estadual de Saúde (SES). 
                            Meu foco está no desenvolvimento web, onde aplico minha paixão pela programação 
                            para criar soluções eficientes e inovadoras.
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="svgContainer">
                            <Circle />
                        </div>
                    )}
                </S.AboutMeContainer>
            </div>
        </S.Section>
    );
};



export default AboutMeSection;
