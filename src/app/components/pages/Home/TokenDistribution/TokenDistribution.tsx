import { FC } from "react";
import { SectionData } from "./SectionData";
import Chart from "react-apexcharts";
import s from "./TokenDistribution.module.scss";
import { KoopaInvest } from "../../../common/TokenProgress";

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

  const chartOptions: any = {
    series: [25, 17.5, 15, 19, 11, 9, 3.5],
    chart: {
      type: "radialBar",
    },
    options: {
      stroke: {
        lineCap: "round",
      },
      chart: {
        // hight: 700,
      },
      selection: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "25%",
            background: "transparent",
            image: undefined,
          },
          // dataLabels: {
          //   name: {
          //     show: false,
          //   },
          //   value: {
          //     show: false,
          //   },
          // },
          dataLabels: {
            name: {
              fontSize: "0px",
            },
            value: {
              fontSize: "30px",
              fontWeight: "800",
              color: "#ffe124",
              fontFamily: "Orbitron, sans-serif",
              marginTop: "-10px",
              offsetY: -5,
            },
            style: {
              colors: ["#fff"],
              fontSize: "40px",
              fontWeight: "800",
            },
            total: {
              show: true,
              label: "",
              formatter: () => {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return "KRL";
              },
            },
          },
          track: {
            background: "#273255",
          },
        },
      },
      labels: [
        "E-Sports & Tournaments",
        "Staking Rewards",
        "KRL Platform Fund",
        "Blue Monster Games (Core team)",
        "Advisors",
        "Public Sale",
        "Private Sale",
      ],
      colors: Array(7).fill("#ffe124"),
      legend: {
        show: true,
        floating: true,
        fontSize: "13px",
        position: "left",
        offsetX: -30,
        offsetY: -10,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
          strokeWidth: 0,
          strokeOpacity: 0,
          fillOpacity: 0.5,
          strokeColors: "#fff",
          color: "transparent",
        },
        formatter: (seriesName: any, opts: any) => {
          return (
            seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              floating: true,
              position: "bottom",
              horizontalAlign: "center",
              offsetX: 0,
              offsetY: 100,
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  value: {
                    fontSize: "20px",
                  },
                  style: {
                    colors: ["#fff"],
                    fontSize: "30px",
                    fontWeight: "800",
                  },
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className={s.container}>
      <div className="container">
        <div className={`row ${s.tokenDistribution}`}>
          <div className="col-md-5">
            <div className="content">
              <h3 className={s.heading}>Token Distribution</h3>
              <p>
                KRL token will be unlocked in a pre-determined schedule which
                lasts for 36 months from the public sale. The initial
                circulating supply is set to 3,000,000,000 KRL token - 30% of
                the total supply. The below chart illustrates the maximum
                possible issuance of KRL token over the coming years, and the
                total supply will never exceed 10,000,000,000
              </p>
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
              <div className={s.mobileLegend}>
                <li>E-Sports {"&"} Tournaments: 25%</li>
                <li>Staking Rewards: 17.5%</li>
                <li>KRL Platform Fund: 15%</li>
                <li>Blue Monster Games (Core team): 19%</li>
                <li>Advisors: 11%</li>
                <li>Public Sale: 9%</li>
                <li>Private Sale: 3.5%</li>
              </div>
              <Chart
                options={chartOptions.options}
                type="radialBar"
                width={"100%"}
                series={chartOptions.series}
              />
            </div>
          </div>
        </div>
        <div className={s.preSale}>
          <div className="row">
            <div className="col-md-5">
              <h3 className={s.heading}>
                KRL token <span>Public Sale</span>
              </h3>
              <p>
                KRL token represents a real slice of the KRL game universe as it
                has governance rights and fee sharing built into it.
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
