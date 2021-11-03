import { FC, useEffect, useState } from "react";
import { SectionData } from "./SectionData";
import Chart from "react-apexcharts";
import s from "./TokenDistribution.module.scss";
import { KoopaInvest } from "../../../common/TokenProgress";

import { useTranslation } from "react-i18next";
import { chartOptions } from "./chartOptions";

const TokenDistribution: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage;
  const [updatedChartOptions, setupdatedChartOptions]: any = useState(null);

  useEffect(() => {
    if (currentLang) {
      let newOptions = { ...chartOptions };
      newOptions.options.labels.map((_item: string, index: any) => {
        newOptions.options.labels[index] = t(
          `TokenDistribution.items.${index}`
        ).split(":")[0];
      });
      setupdatedChartOptions(newOptions);
    }
  }, [currentLang]);
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
                <span>{t(item.label)}</span>
              </td>
              <td>
                <span className={s.value}>{t(item.value)}</span>
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
              <h3 className={s.heading}>{t("TokenDistribution.label")}</h3>
              <p>{t("TokenDistribution.description")}</p>
              {/* <span className={s.startingSoon}>
                KOO Public Sale Round 2 Starting Soon
              </span> */}
              <div className={`${s.joinWaitlist}`}>
                <KoopaInvest />
              </div>
              {/* <a
                href="https://lnarw4vdngy.typeform.com/to/nblkTzUD"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                Join Waitlist
              </a> */}
              {/* <a
                href="https://whitepaper.kartracingleague.com/"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                Read Whitepaper
              </a> */}
            </div>
          </div>
          <div className="col-md-7">
            <div className={s.chartWrapper}>
              {updatedChartOptions && (
                <div className={s.mobileLegend}>
                  {chartOptions.options.labels.map((_item: any, i: any) => (
                    <li key={i}>{t(`TokenDistribution.items.${i}`)}</li>
                  ))}
                </div>
              )}
              {updatedChartOptions && (
                <Chart
                  options={updatedChartOptions.options}
                  type="radialBar"
                  width={"100%"}
                  series={updatedChartOptions.series}
                />
              )}
            </div>
          </div>
        </div>
        <div className={s.preSale}>
          <div className="row">
            <div className="col-md-5">
              <h3 className={s.heading}>
                {t("KRL token")} <span>{t("Pre-sale")}</span>
              </h3>
              <p>{t("preSaleDescription")}</p>
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
