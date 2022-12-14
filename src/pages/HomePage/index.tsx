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
                    ππΌ Hello, World
                </Section.Spark>
                <Section.Heading>
                    λ§λμ λ°κ°μ΅λλ€!
                </Section.Heading>
                <Section.Paragraph>
                    μ μ μΉμ¬μ΄νΈλ₯Ό λ°©λ¬Έν΄ μ£Όμμ κ°μ¬ν©λλ€. μ κ° μμνλ λ°©μκ³Ό μ μ©ν ν΄, κ·Έλ¦¬κ³  κ΄λ ¨ λ§ν¬λ₯Ό νμΈν΄λ³΄μΈμ.
                </Section.Paragraph>
            </Section>

            {/* λ¬Έμν */}
            <Section>
                <Section.Spark>
                    π Small But Powerful Habbits
                </Section.Spark>
                <Section.Heading>
                    μ€μ€λ‘λ₯Ό μμ§μ΄κ² νκ³ , κ·Έ μμ§μλ€μ΄ μλ―Έ μλ λ κ°μ§μ λ§λλ μ΅κ΄λ€
                </Section.Heading>
                <Section.Paragraph>
                    λκ΅¬λ κΏμ κΏλλ€. μ λ κ·Έ κΏμ μ΄λ£¨κΈ° μν΄ κΈ μ°λ μ΅κ΄μ κ°μ Έμμ΅λλ€. 
                    νμ΅νκ³  μμν λ΄μ©λ€μ κ΅¬μ²΄μ μ΄κ³  μ½κΈ° μ½κ² μ λ¦¬ν©λλ€.
                    μ μ λΈμ ννλ¦Ώμμ νμΈν΄λ³΄μΈμ.
                </Section.Paragraph>
                <Section.Paragraph>
                    κ°λ°μλ μ½λλ‘ λ§ν  μ€ μμμΌ ν©λλ€. μ μ²΄λ₯Ό λ³΄λ λμ κΈ°λ₯΄κΈ° μν λ§ν¬λ€μ΄κ³Ό λΆλΆμ μΈ μ€λͺμ μν μ£Όμμ λ€λ μ΅κ΄μ κ°κ³  μμ΅λλ€. μ μ κΉνλΈ λ¬Έμμμ νμΈν΄λ³΄μΈμ.
                </Section.Paragraph>
                <Button size='small'>νμΈνλ¬ κ°κΈ°!</Button>
            </Section>

            {/* λκ΅¬ */}
            <Section>
                <Section.Spark>
                    π§© Ultimate Tools for works
                </Section.Spark>
                <Section.Heading>
                    λͺ©μ  λ¬μ±κ³Ό λ¬Έμ ν΄κ²°μ μν΄ λμμλ λμ κ³Ό νμ΅ μ μ 
                </Section.Heading>
                <Section.Paragraph>
                    Web Frontend Framework, Design System with Framer, DevOps for WebPage
                </Section.Paragraph>
                <Button size='large'>νμΈνλ¬ κ°κΈ°!</Button>
            </Section>

        </Wrapper>
    )
}

export default HomePage

const Wrapper = styled.main`
    display : flex;
    flex-direction : column;
    
`