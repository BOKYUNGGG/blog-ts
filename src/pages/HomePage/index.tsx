import Section from '../../component/Section'
import Button from '../../component/Button'
import styled from 'styled-components'

interface Props {
    className? : string
}
const HomePage = (props : Props) => {
    const {className, ...rest} = props
    


    return (
        <Wrapper 
        {...rest}
        className={className}>

            {/* Introduction Section */}
            <Section> 
                <Section.Spark>
                    👋🏼 Hello, World
                </Section.Spark>
                <Section.Heading>
                    만나서 반갑습니다!
                </Section.Heading>
                <Section.Paragraph>
                    저의 웹사이트를 방문해 주셔서 감사합니다. 제가 작업하는 방식과 유용한 툴, 그리고 관련 링크를 확인해보세요.
                </Section.Paragraph>
            </Section>

            {/* 문서화 */}
            <Section>
                <Section.Spark>
                    📝 Small But Powerful Habbits
                </Section.Spark>
                <Section.Heading>
                    스스로를 움직이게 하고, 그 움직임들이 의미 있는 날개짓을 만드는 습관들
                </Section.Heading>
                <Section.Paragraph>
                    누구나 꿈을 꿉니다. 저는 그 꿈을 이루기 위해 글 쓰는 습관을 가져왔습니다. 
                    학습하고 작업한 내용들을 구체적이고 읽기 쉽게 정리합니다.
                    저의 노션 템플릿에서 확인해보세요.
                </Section.Paragraph>
                <Section.Paragraph>
                    개발자는 코드로 말할 줄 알아야 합니다. 전체를 보는 눈을 기르기 위한 마크다운과 부분적인 설명을 위한 주석을 다는 습관을 갖고 있습니다. 저의 깃허브 문서에서 확인해보세요.
                </Section.Paragraph>
            </Section>

            {/* 도구 */}
            <Section>
                <Section.Spark>
                    🧩 Ultimate Tools for works
                </Section.Spark>
                <Section.Heading>
                    목적 달성과 문제해결을 위해 끊임없는 도전과 학습 정신
                </Section.Heading>
                <Section.Paragraph>
                    Web Frontend Framework, Design System with Framer, DevOps for WebPage
                </Section.Paragraph>
            </Section>

        </Wrapper>
    )
}

export default HomePage

const Wrapper = styled.main`
    display : flex;
    flex-direction : column;
    
`