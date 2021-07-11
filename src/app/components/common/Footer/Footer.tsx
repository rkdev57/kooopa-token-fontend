import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  const UnSupportedDevice = () => (
    <div className={s.unSupportedDevice}>
      <div className={s.content}>
        <img className={s.logo} src="/images/logo.png" alt="" />
        <p>
          {" "}
          Please use your <b>Desktop</b> to join sale. <br /> Mobile / Tablet
          device not supported.{" "}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div className={`${s.sectionWrapper} app-footer`}>
        <div className={s.sectionImageWrapper}>
          <img className={s.sectionImage} src="/images/footer-bg.png" alt="" />
        </div>
        <div className={s.listItem}>
          <a href="https://kooopa.io">Website</a>
          <a href="https://twitter.com/kooopatoken" target="_blank">
            Twitter
          </a>
          <a href="https://t.me/officialkooopatoken" target="_blank">
            Telegram
          </a>
          <a
            href="https://uploads-ssl.webflow.com/60afc9d534ce48f2270d5f8e/60c7936d4c740c6befc10a37_KOOOPA%20Litepaper_compressed.pdf"
            target="_blank"
          >
            Litepaper
          </a>
        </div>
      </div>
      <UnSupportedDevice />
    </div>
  );
};

export default Footer;
