import { SEO } from '../components/SEO';
import Image from 'next/image';
import React from 'react';
import etherscanLogo from '../public/etherscan-logo.png';
import imgZero from '../public/images/0.png';
import imgOne from '../public/images/1.png';
import imgEleven from '../public/images/11.png';
import imgTwo from '../public/images/2.png';
import imgFortyFour from '../public/images/44.png';
import imgSix from '../public/images/6.png';
import imgSeven from '../public/images/7.png';
import imgEightyOne from '../public/images/81.png';
import imgNine from '../public/images/9.png';
import openSeaLogo from '../public/opensea-logo.png';
import twitterLogo from '../public/twitter-logo.png';
import discordLogo from '../public/discord-logo.png';
import githubLogo from '../public/github-logo.png';
import rarityToolsLogo from '../public/rarity-tools-logo.png';
import duneAnalytics from '../public/dune-analytics-logo.png';
import imgFive from '../public/weird-whales.gif';
import * as Constants from '../services/constants';
import styles from '../styles/Home.module.scss';
import imageData from '../image-hashes.json';

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const insertCommasToNumber = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const MAX_TOKENS = 3350;
const TOTAL_SUPPLY = 3350;
const ETHERSCAN_LINK = `${Constants.ETHERSCAN_CONTRACT_ADDRESS}${Constants.CONTRACT_ADDRESS}`;

export default function Home() {
  const ExternalIcons = () => {
    return (
      <div>
        <a
          href="https://twitter.com/ObiWanBenoni"
          className="mr-2"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={twitterLogo}
            width={30}
            height={30}
            alt="Connect on Twitter."
          />
        </a>

        <a
          href="https://discord.gg/gpSU5AVjju"
          className="mr-2"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={discordLogo}
            width={30}
            height={30}
            alt="Join the Discord!"
          />
        </a>

        <a
          href={`${ETHERSCAN_LINK}`}
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <Image
            src={etherscanLogo}
            width={30}
            height={30}
            alt="View contract on Etherscan."
          />
        </a>

        <a
          href="https://duneanalytics.com/obiwanbenoni/Weird-Whales"
          className="mr-2"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={duneAnalytics}
            width={30}
            height={30}
            alt="Check out Dune Analytics."
          />
        </a>

        <a
          href="https://github.com/benyaminahmed/weird-whales-images"
          className="mr-2"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={githubLogo}
            width={30}
            height={30}
            alt="Find the images on GitHub."
          />
        </a>

        <a
          href="https://rarity.tools/weirdwhales"
          className="mr-2"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={rarityToolsLogo}
            width={30}
            height={30}
            alt="Find us on rarity.tools!"
          />
        </a>
      </div>
    );
  };

  const WhaleImage = ({ src }) => {
    return (
      <div className="column">
        <Image
          src={src || imgZero}
          className={styles.img}
          /* "alt" is used for folks with visual disabilities and is read aloud */
          alt="Whale"
          width={200}
          height={200}
        />
      </div>
    );
  };

  const OpenSeaLogo = () => {
    return (
      <Image
        src={openSeaLogo}
        width={30}
        height={30}
        alt="View whales on OpenSea."
      />
    );
  };

  const SoldOutContent = () => {
    return (
      <div className={`mt-3 mb-3 ${styles.soldOut}`}>
        <h4 className="title is-4">SOLD OUT</h4>
        <a
          href="https://opensea.io/collection/weirdwhales"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className={`button is-rounded ${styles.mintButton} is-primary`}
          >
            Buy on OpenSea&nbsp;&nbsp; <OpenSeaLogo />
          </button>
        </a>
      </div>
    );
  };

  const WhaleImages = () => {
    return (
      <div className="column is-hidden-touch">
        <div className="columns">
          <WhaleImage src={imgTwo} />
          <WhaleImage src={imgOne} />
          <WhaleImage src={imgEightyOne} />
        </div>
        <div className="columns">
          <WhaleImage src={imgEleven} />
          <WhaleImage src={imgFive} />
          <WhaleImage src={imgSix} />
        </div>
        <div className="columns">
          <WhaleImage src={imgSeven} />
          <WhaleImage src={imgFortyFour} />
          <WhaleImage src={imgNine} />
        </div>
      </div>
    );
  };

  const WhaleImagesMobile = () => {
    return (
      <div className="is-hidden-desktop p-3 has-text-centered">
        <Image
          src={imgFive}
          className={styles.img}
          alt="Feeling lucky? Grab a whale."
          width={600}
          height={600}
        />
        <div className="mt-3 has-text-centered">
          <ExternalIcons />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <SEO />

      <main>
        <div className="columns is-desktop">
          <div className="column">
            <div className="columns">
              <div className="column">
                <h1 className={`title is-1 ${styles.heroTitle}`}>
                  Weird Whales
                </h1>
              </div>
            </div>
            <h4 className={`title is-4 ${styles.mintedLabel}`}>
              {insertCommasToNumber(TOTAL_SUPPLY)}/
              {insertCommasToNumber(MAX_TOKENS)} minted
            </h4>
            <p>
              Weird Whales is a collection of NFTs - unique digital
              collectibles, swimming on the Ethereum Blockchain. 3,350 whales
              have been programmatically generated from an ocean of
              combinations, each with unique characteristics and different
              traits.
            </p>
            <br />
            <p>Own a Weird Whale and surf the crypto revolution!</p>
            <SoldOutContent />
            <div className="is-hidden-touch">
              <ExternalIcons />
            </div>
          </div>
          <WhaleImages />
          <WhaleImagesMobile />
        </div>

        <div style={{ marginTop: '80px' }}>
          <h1 className="title">PROVENANCE RECORD</h1>
          <div>
            <h1 className={`title is-5 ${styles.titleBrand}`}>
              Contract Details
            </h1>
            <h6 className="subtitle is-6">
              Contract |{' '}
              <a href={`${ETHERSCAN_LINK}`} target="_blank" rel="noreferrer">
                0x96Ed81c7F4406Eff359E27BfF6325DC3c9e042BD
              </a>
            </h6>
            <h6 className="subtitle is-6">
              Final Proof Hash | {Constants.PROVENANCE_HASH_FINAL}
            </h6>
          </div>
          <div>
            <h1 className={`title is-5 ${styles.titleBrand}`}>
              Concatenated Hash String
              <div className={styles.sectionProvenanace}>
                <textarea
                  style={{ backgroundColor: 'transparent', fontSize: '10px' }}
                  className="textarea"
                  rows="10"
                  cols="100"
                  value={Constants.PROVENANCE_HASH}
                  disabled
                />
              </div>
            </h1>
          </div>
          <div>
            <h1 className={`title is-5 ${styles.titleBrand}`}>Whale Record</h1>
            <table className={`table ${styles.tableBrand}`}>
              <thead>
                <tr>
                  <th>WHALE ID</th>
                  <th>OPENSEA</th>
                  <th>RAW IMAGE</th>
                  <th>SHA-256 HASH</th>
                  <th>IPFS IMAGE</th>
                </tr>
              </thead>
              <tbody>
                {imageData
                  .sort((a, b) => a.tokenId - b.tokenId)
                  .map((x, i) => (
                    <tr key={x.tokenId}>
                      <td>{x.tokenId}</td>
                      <td>
                        <a
                          href={`${Constants.OPENSEA_ASSET_BASE}${x.tokenId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VIEW OPENSEA
                        </a>
                      </td>
                      <td>
                        <a
                          href={`${Constants.IMAGE_BASE_600X600}${x.tokenId}.png?raw=true`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VIEW IMAGE
                        </a>
                      </td>
                      <td>{x.hash}</td>
                      <td>
                        <a
                          href={`${Constants.IPFS_IMAGE_LINK}${x.tokenId}.png`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VIEW IMAGE
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
