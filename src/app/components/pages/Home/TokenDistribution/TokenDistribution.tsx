import { FC } from "react";
import { SectionData } from "./SectionData";
import s from "./TokenDistribution.module.scss";

const TokenDistribution: FC = () => {
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

  return (
    <div className={s.container}>
      <div className="container">
        <div className={`row ${s.tokenDistribution}`}>
          <div className="col-md-5">
            <div className="content">
              <h3 className={s.heading}>Token Distribution</h3>
              <p>
                Kooopa Racing League (KRL) is a fast-paced arcade style kart
                racing NFT game where anyone can earn through skilled gameplay
                and contributions to the ecosystem. KOO is the glue that binds
                all KRL community members together.
              </p>
              <a className={`btn-app-default ${s.btnAction}`}>
                Read Whitepaper
              </a>
            </div>
          </div>
          <div className="col-md-7"></div>
        </div>
        <div className={s.preSale}>
          <div className="row">
            <div className="col-md-5">
              <h3 className={s.heading}>
                KOO <span>Public Sale</span>
              </h3>
              <p>
                Kooopa Racing League (KRL) is a fast-paced arcade style kart
                racing NFT game where anyone can earn through skilled gameplay
                and contributions to the ecosystem. KOO is the glue that binds
                all KRL community members together.
              </p>
            </div>
            <div className="col-md-7">
              <ShowListItems items={SectionData.phase} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDistribution;
