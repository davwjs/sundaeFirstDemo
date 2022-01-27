import React from 'react'
import styled from 'styled-components'
import ImageOne from '../images/road1.png'
import ImageTwo from '../images/road2.png'
import ImageThree from '../images/road3.png'

const RoadMapContainer = styled.div`
    background-color: #f0eff1;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }
`;

const RoadMapWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const RoadMapCategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const RoadMapCard = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    padding: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const RoadMapIcon = styled.img`
    height: 300px;
    width: 300px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        height: 200px;
        width: 200px;
    }
`;

const RoadMapH1 = styled.h1`
    font-size: 2.5rem;
    color: #000000;
    margin-bottom: 64px;
    justify-content: center;

    @media screen and (max-width: 480ox) {
        font-size: 2rem;
    }
`;

const RoadMapH2 = styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
    color: #000000;
`;

const RoadMapP = styled.p`
    color: #000000;
    font-size: 2rem;
    text-align: center;
`;

const RoadMap = () => {
    return (
        <RoadMapContainer id="roadmap">
            <RoadMapH1>ROADMAP</RoadMapH1>
                <RoadMapCategoryWrapper>
                    <RoadMapWrapper>
                        <RoadMapCard>
                            <RoadMapIcon src={ImageOne}/>
                            <RoadMapH2>PHASE 1: IN THE BEGINNING</RoadMapH2>
                            <RoadMapP>A new dimension</RoadMapP>
                            <RoadMapP>First drop</RoadMapP>
                            <RoadMapP>Music to HAPE to</RoadMapP>
                        </RoadMapCard>
                        <RoadMapCard>
                            <RoadMapIcon src={ImageTwo}/>
                            <RoadMapH2>PHASE 2: THE HAPE MACHINE</RoadMapH2>
                            <RoadMapP>Second drops</RoadMapP>
                            <RoadMapP>Special collections</RoadMapP>
                            <RoadMapP>Simian engineering</RoadMapP>
                        </RoadMapCard>
                        <RoadMapCard>
                            <RoadMapIcon src={ImageThree}/>
                            <RoadMapH2>PHASE 3: THE HAPEWALK</RoadMapH2>
                            <RoadMapP>Clothing collabs</RoadMapP>
                            <RoadMapP>HAPE Couture</RoadMapP>
                            <RoadMapP>The runway to fame</RoadMapP>
                        </RoadMapCard>
                    </RoadMapWrapper>
                </RoadMapCategoryWrapper>
        </RoadMapContainer>
    );
};

export default RoadMap;