import { useEffect, useState } from 'react';
import Web3 from 'web3';
import * as Constants from '../services/constants';
import contractABI from '../services/contract-abi.json';
import {
  connectWallet,
  getCurrentWalletConnected,
} from '../services/interact.js';
import styles from '../styles/Home.module.scss';

const Minter = (props) => {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const { address, status } = await connectWallet();
    setStatus(status);
    setWallet(address);
  };

  async function onMintPressed(numberoftokens, tokenPrice) {
    if (
      contractABI &&
      numberoftokens &&
      numberoftokens > 0 &&
      window.ethereum &&
      walletAddress
    ) {
      const price = Number(numberoftokens) * tokenPrice;
      setStatus('');
      try {
        window.web3 = new Web3(window.ethereum);
        const contract = await new window.web3.eth.Contract(
          contractABI,
          Constants.CONTRACT_ADDRESS
        );

        contract.methods
          .mint(numberoftokens)
          .send({
            from: walletAddress,
            value: price,
          })
          .on('transactionHash', function (hash) {
            setStatus(
              <p>
                ✅ Check out your transaction on{' '}
                <a
                  href={`${Constants.ETHERSCAN_TX_ADDRESS}${hash}`}
                  className="text-green-700 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Etherscan
                </a>
              </p>
            );
          });
      } catch (error) {
        setStatus(`😥 Something went wrong: ${error}`);
      }
    }
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet('');
          setStatus('');
        }
      });
    } else {
      setStatus(Constants.getMetaMaskLink());
    }
  }

  return (
    <>
      {' '}
      <div>
        {walletAddress.length !== 0 ? (
          <div>
            <button
              className={`button is-rounded ${styles.mintButton} is-primary`}
              onClick={() => onMintPressed(props.tokens, props.tokenPrice)}
            >
              MINT
            </button>
            <div className="title is-7">
              {'Connected: ' +
                String(walletAddress).substring(0, 6) +
                '...' +
                String(walletAddress).substring(38)}
            </div>
          </div>
        ) : (
          <button
            className={`button is-rounded ${styles.mintButton} is-primary`}
            onClick={connectWalletPressed}
          >
            Connect Wallet 🦊
          </button>
        )}
      </div>
      <div className="title is-4 mb-4">{status}</div>
    </>
  );
};

export default Minter;
