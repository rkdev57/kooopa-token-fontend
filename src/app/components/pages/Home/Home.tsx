import { FC } from "react";
import { PresaleToken } from "../../common";
import JoinTelegram from "../../common/JoinTelegram";
import AboutUs from "./AboutUs";
import s from "./Home.module.scss";
import TokenDistribution from "./TokenDistribution";
import TokenUtility from "./TokenUtility";

const Home: FC = () => {
  return (
    <>
      <div className={s.commonGroup}>
        <PresaleToken />
        <TokenUtility />
        <TokenDistribution />
        <JoinTelegram />
        <AboutUs />

        {/* <ClaimToken /> */}
        {/* <TokenProgress />
        <Intro />
        <CoopaPhases /> */}
      </div>
    </>
  );
};

export default Home;
