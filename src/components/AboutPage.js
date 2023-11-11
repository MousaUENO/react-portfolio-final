import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        Ik ben een webdeveloper gevestigd in Nederland. Mijn passie ligt in het creëren van zowel eenvoudige als prachtige websites met een focus op een optimale gebruikerservaring. Mijn expertise omvat het volledige spectrum van frontend-ontwikkeling, en ik ben altijd bezig met het verkennen van nieuwe technologieën en het realiseren van boeiende projecten.
<br /> <br/>

Als zelfstandige freelancer en blogger deel ik mijn kennis en ervaring met anderen. Schrijven is een van mijn favoriete bezigheden, en ik publiceer regelmatig blogs over mijn vakgebied en de laatste ontwikkelingen in de webwereld. Naast het bouwen en ontwerpen van websites, ben ik ook gepassioneerd door het lezen van boeken die mijn kennis en creativiteit stimuleren.
<br /> <br/>

Ik geloof sterk in de kunst van webontwikkeling en ben ervan overtuigd dat het toevoegen van bewustzijn aan mijn werk de sleutel is tot het leveren van hoogwaardige resultaten. Wil je meer met mij delen of contact opnemen, dan kun je me bereiken via mijn sociale links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
