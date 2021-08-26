import { FC } from "react";
import { SectionData } from "./SectionData";
import Chart from "react-apexcharts";
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

  const chartOptions: any = {
    series: [25, 17.5, 15, 19, 11, 9, 3.5],
    chart: {
      height: 500,
      type: "radialBar",
    },
    options: {
      stroke: {
        lineCap: "round",
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
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

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
              <a
                href="https://kooopa-racing-league.gitbook.io/kooopa-racing-league"
                target="_blank"
                className={`btn-app-default ${s.btnAction}`}
              >
                Read Whitepaper
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className={s.chartWrapper}>
              <Chart
                options={chartOptions.options}
                type="radialBar"
                width={600}
                height={chartOptions.chart.height}
                series={chartOptions.series}
              />
            </div>
          </div>
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
