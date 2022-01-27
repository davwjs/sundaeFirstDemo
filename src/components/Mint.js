import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import banner from "../images/banner.gif";
import styled from "styled-components";

const MintSection = styled.div`
  height: 30rem;
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30rem;
`;

const MintContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  // @media (min-width: 640px) {
  //   .container {
  //     max-width: 640px;
  //   }
  // }

  // @media (min-width: 768px) {
  //   .container {
  //     max-width: 768px;
  //   }
  // }

  // @media (min-width: 1024px) {
  //   .container {
  //     max-width: 1024px;
  //   }
  // }

  // @media (min-width: 1280px) {
  //   .container {
  //     max-width: 1280px;
  //   }
  // }

  // @media (min-width: 1536px) {
  //   .container {
  //     max-width: 1536px;
  //   }
  // }
`;

const MintInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  --tw-translate-x: -50%;
  -webkit-transform: var(--tw-transform);
  transform: var(--tw-transform);
  --tw-translate-y: -50%;
  -webkit-transform: var(--tw-transform);
  transform: var(--tw-transform);
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const MintImageWrapper = styled.div`
  display: flex;
`;

const MintImage = styled.img`
  max-width: 100%;
  width: 30rem;
  border-radius: 0.5rem;
`;

const MintH1 = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 2.5rem;
  --tw-text-opacity: 1;
  color: #000;
  padding-top: 3rem;
`;

const MintP = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #000;
`;
const MintP2 = styled.p`
  font-weight: 700;
  color: #000;
  font-size: 1.5rem;
`;
const MintP3 = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 1.5rem;
`;

const MintConnect = styled.div`
  background-color: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 9999px;
  &:hover {
    --tw-bg-opacity: 1;
    // background-color: #000;
  }
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 100ms;
`;

const MintConnectButton = styled.button`
  text-transform: uppercase;
  color: #000;
  border: none;
  &:hover {
    transform: translateY(-3px);
  }
`;
const MintErrMsg = styled.p`
  text-align: center;
  color: #000;
`;
const MintBuyWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const MintMinusBtnWrapper = styled.div`
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 0.125rem;
  color: #000;
  font-weight: 700;
  cursor: pointer;
`;
const MintMinusBtnSpan = styled.span`
  font-size: 2.8rem;
  line-height: 2.5rem;
`;
const MintAmountP = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-width: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 0.125rem;
`;
const MintPlusBtnWrapper = styled.div`
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 0.125rem;
  color: #000;
  font-weight: 700;
  cursor: pointer;
`;
const MintPlusBtnSpan = styled.span`
  font-size: 1.8rem;
  line-height: 2rem;
`;
const MintBtnWrapper = styled.div`
  background-color: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 9999px;
  &:hover {
    --tw-bg-opacity: 1;
    // background-color: #000;
  }
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 100ms;
`;
const MintBtn = styled.button`
  margin-top: -20px;
  width: 60px;
  height: 30px;
  border: none;
  &:hover {
    transform: translateY(-3px);
  }
`;
const MintPlusBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  &:hover {
    transform: translateY(-3px);
  }
`;
const MintMinusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    OWNER_ADDRESS: "",

    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let WalletAddress = blockchain.account;
    WalletAddress = WalletAddress.toUpperCase();

    let TheOwnerAddress = CONFIG.OWNER_ADDRESS;
    TheOwnerAddress = TheOwnerAddress.toUpperCase();

    if (WalletAddress == TheOwnerAddress) {
      CONFIG.WEI_COST = 0;
    } else if (data.totalSupply > 1 && data.totalSupply < 10000)
      CONFIG.WEI_COST = CONFIG.WEI_COST;

    let cost = CONFIG.WEI_COST;

    let cost1 = CONFIG.COST1;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, Try  to mint again Something is wrong.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Your a Proud Owner Of ${CONFIG.NFT_NAME}  go Check it On Opensea.io .`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);

  return (
    <>
      <MintSection>
        <MintContainer>
          <MintInner>
            <MintImageWrapper data-aos="fade-down" data-aos-duration="1200">
              <MintImage src={banner} alt="" />
            </MintImageWrapper>
            <MintH1>Mint a Toadle</MintH1>
            <MintP>
              {data.totalSupply} / {CONFIG.MAX_SUPPLY} Toadle left at 0.03 ETH
              each
            </MintP>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <MintP2>The sale has ended.</MintP2>
                <MintP2>You can still find {CONFIG.NFT_NAME} on</MintP2>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={CONFIG.MARKETPLACE_LINK}
                >
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <>
                    <MintP3>
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </MintP3>
                    <MintConnect>
                      <MintConnectButton
                        className="uppercase text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        connect
                      </MintConnectButton>
                    </MintConnect>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <MintErrMsg>{blockchain.errorMsg}</MintErrMsg>
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <MintErrMsg>{feedback}</MintErrMsg>
                    <>
                      <MintBuyWrapper>
                        <MintMinusBtnWrapper>
                          <MintMinusBtn
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            <MintMinusBtnSpan>
                              -
                            </MintMinusBtnSpan>
                          </MintMinusBtn>
                        </MintMinusBtnWrapper>
                        <MintAmountP>{mintAmount}</MintAmountP>
                        <MintPlusBtnWrapper>
                          <MintPlusBtn
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            <MintPlusBtnSpan>
                              +
                            </MintPlusBtnSpan>
                          </MintPlusBtn>
                        </MintPlusBtnWrapper>
                      </MintBuyWrapper>
                    </>
                    <>
                      <div>
                        <MintBtnWrapper>
                          <MintBtn
                            className="btn mint__btn text-white"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            <span>{claimingNft ? "BUSY" : "MINT"}</span>
                          </MintBtn>
                        </MintBtnWrapper>
                      </div>
                    </>
                  </>
                )}
              </>
            )}
          </MintInner>
        </MintContainer>
      </MintSection>
    </>
  );
};

export default Mint;
