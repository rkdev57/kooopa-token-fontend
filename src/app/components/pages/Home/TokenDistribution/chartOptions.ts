export const chartOptions: any = {
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
      "Pre-sale",
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
