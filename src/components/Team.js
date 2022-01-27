import React from 'react'
import styled from 'styled-components'
import ImageOne from '../images/team3.png'
import ImageTwo from '../images/team1.png'
import ImageThree from '../images/team2.png'

const TeamContainer = styled.div`
    background-color: #f0eff1;
    height: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1800px;
    }
`;

const TeamWrapper1 = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;
    margin-bottom: 150px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const TeamCard1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    width: 400px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamIcon1 = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
    border-radius: 100px;
`;

const TeamH1 = styled.h1`
    font-size: 4rem;
    font-weight: 1000;
    color: #000;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const TeamH2 = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #000;
    text-align: center;
`;

const TeamP1 = styled.p`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: #000;
    margin-bottom: 10px;
    text-align: center;
`;

const TeamP2 = styled.p`
    font-size: 1.7rem;
    text-align: center;
    color: #000;
    text-align: center;
`;

const Team = () => {
    return (
        <TeamContainer id="team">
            <TeamH1>MEET OUR TEAM</TeamH1>
            <TeamWrapper1>
                <TeamCard1>
                    <TeamIcon1 src={ImageTwo} alt={ImageTwo}/>
                    <TeamH2>Toadler</TeamH2>
                    <TeamP1>PRIMAL HAPE</TeamP1>
                    <TeamP2>Founder of this project. Lead Digital Artist on the project.</TeamP2>
                </TeamCard1>
            </TeamWrapper1>
            <TeamWrapper1>
                <TeamCard1>
                    <TeamIcon1 src={ImageOne} alt={ImageTwo}/>
                    <TeamH2>Toadler</TeamH2>
                    <TeamP1>PRIMAL HAPE</TeamP1>
                    <TeamP2>Founder of this project. Lead Digital Artist on the project.</TeamP2>
                </TeamCard1>
            </TeamWrapper1>
            <TeamWrapper1>
                <TeamCard1>
                    <TeamIcon1 src={ImageThree} alt={ImageTwo}/>
                    <TeamH2>Toadler</TeamH2>
                    <TeamP1>PRIMAL HAPE</TeamP1>
                    <TeamP2>Founder of this project. Lead Digital Artist on the project.</TeamP2>
                </TeamCard1>
            </TeamWrapper1>
        </TeamContainer>
    );
};

export default Team;