import { FC } from "react";
import { SectionData } from "./SectionData";
import s from "./CoopaPhases.module.scss";

const CoopaPhases: FC = () => {
  const cloudinaryBasePath =
    "https://ipfs.fleek.co/ipfs/QmYzCTpw5xrYroRiA7uWQAzputbPR35bfxuwEXhaFtKN3C/";

  const Phase1: FC = () => (
    <div className={`row ${s.singlePhase} ${s.phase1}`}>
      <div className={`col-md-7 ${s.alignVideoCenter}`}>
        <div className={`${s.videoWrapper}`}>
          <video
            muted
            autoPlay={true}
            loop={true}
            src={`${cloudinaryBasePath}retro-game-console-hd-MVCNQTF-800.mp4`}
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className={s.content}>
          <p>
            <b>
              OK boomer — you’ve had a head start this far, why stop now? Phase
              1 is for those looking for a once in a generation-type token sale
              price.
            </b>{" "}
            Sale starts on Monday, July 19 and will sell 250 million (2.5%) KOO
            at a price of 0.0002 USD per token. The only accepted currency to
            purchase tokens in this phase is the ETH. This phase lasts for 7
            days or until all tokens have been sold, whichever comes first. Any
            unsold tokens will be added to the next phase.
          </p>
          <ShowListItems items={SectionData.phase1} />
          <div className={s.header}>
            <span className={s.heading}>Phase 1</span>
            <img
              className={s.phaseIcon}
              src="/images/phases/phase-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
  const Phase2: FC = () => (
    <div className={`row ${s.singlePhase} ${s.reverseRow} ${s.phase2}`}>
      <div className={`col-md-7 ${s.alignVideoCenter}`}>
        <div className={`${s.videoWrapper}`}>
          <video
            muted
            autoPlay={true}
            loop={true}
            src={`${cloudinaryBasePath}retro-game-console-hd-XTN8EUZ-800.mp4`}
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className={s.content}>
          <p>
            <b>
              Here's to the MTV Generation, never last to a party but usually
              'fashionably' late. Don't let the Boomers get one over on you
              again, this is your chance.
            </b>{" "}
            Sale starts on Monday, July 26 and will sell 750 million (7.5%) KOO
            at a price of 0.00025 USD per token. In this phase we will accept
            any ERC-20 token and Fiat payments supported by our onramp provider.
            This phase lasts for 7 days or until all tokens have been sold,
            whichever comes first. Any unsold tokens will be added to the next
            phase.
          </p>
          <ShowListItems items={SectionData.phase2} />
          <div className={s.header}>
            <span className={s.heading}>Phase 2</span>
            <img
              className={s.phaseIcon}
              src="/images/phases/phase-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );

  const Phase3: FC = () => (
    <div className={`row ${s.singlePhase} ${s.phase3}`}>
      <div className={`col-md-7 ${s.alignVideoCenter}`}>
        <div className={`${s.videoWrapper}`}>
          <video
            muted
            autoPlay={true}
            loop={true}
            src={`${cloudinaryBasePath}high-technology-ray-tracing-graphics-card-hd-9EPFW9J-800.mp4`}
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className={s.content}>
          <p>
            <b>
              Housing crisis, crippling student debt, Uber and Netflix taking
              all your money — It's a sick joke, I know right? But forget all
              that, Millennials. This is what you’ve been waiting for, think AMC
              and Doge had a baby, and that baby is on steroids: That’s Kart
              Racing League (KRL). Don’t miss out, you know you will FOMO hard
              otherwise.
            </b>{" "}
            Sale starts on Monday, Aug 2 and will sell 750 million (7.5%) KOO at
            a price of 0.0003 USD per token. In this phase we will accept any
            ERC-20 token and Fiat payments supported by our onramp provider.
            This phase lasts for 7 days or until all tokens have been sold,
            whichever comes first. Any unsold tokens will be added to the next
            phase.
          </p>
          <ShowListItems items={SectionData.phase3} />
          <div className={s.header}>
            <span className={s.heading}>Phase 3</span>
            <img
              className={s.phaseIcon}
              src="/images/phases/phase-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );

  const Phase4: FC = () => (
    <div className={`row ${s.singlePhase} ${s.reverseRow} ${s.phase4}`}>
      <div className={`col-md-7 ${s.alignVideoCenter}`}>
        <div className={`${s.videoWrapper}`}>
          <video
            muted
            autoPlay={true}
            loop={true}
            src={`${cloudinaryBasePath}abstract-virtual-reality-headset-hd-ZG49HGG-800.mp4`}
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className={s.content}>
          <p>
            <b>
              You don’t need money, we know. You made your first billion at age
              21 providing liquidity to a Shibu-BabyDoge pool returning 9887%
              APR on some underground-secret 4chan DEX nobody has even heard of.
              You are the DeFi generation. Gen-Z, you know what to do.
            </b>{" "}
            Sale starts on Monday, Aug 9 and will allocate 250 million (2.5%)
            KOO to SushiSwap. This will create an ETH/KOO Liquidity Pool, at a
            price of 0.0005USD. Holders of KOO will be able to pool their KOO
            and earn 0.25% fee on all trades proportional to their share of the
            pool.
          </p>
          <ShowListItems items={SectionData.phase4} />
          <div className={s.header}>
            <span className={s.heading}>Phase 4</span>
            <img
              className={s.phaseIcon}
              src="/images/phases/phase-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );

  interface ListItemInterface {
    items: any;
  }
  const ShowListItems: FC<ListItemInterface> = ({ items }) => (
    <div className={s.listItem}>
      <table>
        <tbody>
          {items.map((item: any, index: number) => (
            <tr key={index} className={s.label}>
              <td>
                <span>{item.label}</span>
              </td>
              <td>
                <span className={s.value}>{item.value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const VideoClipPath = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      preserveAspectRatio="none"
      className={s.videoClip}
    >
      <defs>
        <clipPath id="mask">
          <path
            d="M1 1.84h739.884c43.22 0 68.875-8.534 53.75 29.834C778.576 64.185 709.03 213.215 600.436 449H1z"
            stroke="#fff"
            strokeWidth="2.002"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className={s.sectionWrapper}>
      <div className="container">
        <VideoClipPath />
        <Phase1 />
        <Phase2 />
        <Phase3 />
        <Phase4 />
      </div>
    </div>
  );
};

export default CoopaPhases;
