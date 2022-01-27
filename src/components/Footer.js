import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {FaDiscord, FaTwitter} from 'react-icons/fa'

const FooterContainer = styled.footer`
    background-color: transparent;
`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

// const FooterLinksContainer = styled.div`
//     display: flex;
//     justify-content: center;

//     @media screen and (max-width: 820px) {
//         padding-top: 32px;
//     }
// `;

// const FooterLinksWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;

//     @media screen and (max-width: 820px) {
//         flex-direction: column;
//     }
// `;

// const FooterLinkItems = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     margin: 16px;
//     text-align: left;
//     width: 160px;
//     box-sizing: border-box;
//     color: #ffff000ff;

//     @media screen and (max-width: 420px) {
//         margin: 0;
//         padding: 10px;
//         width: 100%;
//     }
// `;

// const FooterLinkTitle = styled.h1`
//     font-size: 14px;
//     margin-bottom: 16px;
// `;

// const FooterLink = styled(Link)`
//     color: #000;
//     text-decoration: none;
//     margin-bottom: 0.5rem;
//     font-size: 14px;
//     &:hover {
//         color: #01bf71;
//         transition: 0.3s ease-out;
//     }
// `;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

// const SocialLogo = styled(Link)`
//     color: #000;
//     justify-self: start;
//     cursor: pointer;
//     text-decoration: none;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     margin-bottom: 16px;
//     font-weight: bold;
// `;

const WebsiteRights = styled.small`
    color: #000;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;


const SocialIconLink = styled.a`
    color: #000;
    font-size: 30px;
`;


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo to='/'>LOGO</SocialLogo> */}
                        <WebsiteRights>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://discord.gg/92EqRXrW" target="_blank" aria-label="Discord">
                                <FaDiscord/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/ToadleToadle" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;