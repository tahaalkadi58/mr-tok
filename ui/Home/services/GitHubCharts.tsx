"use client";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { services_items_data } from "@/lib/utils/Class_services_items";
import SectionTitle from "../shared/SectionTitle";
import fetchAllRepoLanguages from "@/lib/utils/fetchRepoData";
import { RepoContext } from "@/lib/contexts/GithubContext";
import windowMedia from "@/lib/utils/windowMediaWidth";
import styles from "./Main.module.scss";
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);

export interface iData {
  name: string;
  percentage: string;
}

interface iCharts {
  color: string;
  activeTab: number;
  stats: iData[];
  setStats: (data: iData[]) => void;
}

const data: iData[] = services_items_data
  .map(({ percentage, title }) => {
    if (title !== "And More!") return { name: title, percentage };
  })
  .filter((el) => el !== undefined);

const GitHubCharts: FunctionComponent<iCharts> = ({
  color,
  activeTab,
  stats,
  setStats,
}) => {
  const [] = useState();
  const chartRef = useRef<Chart | null>(null);
  const { repos } = useContext(RepoContext);
  const { s } = windowMedia;
  const ref = useRef<HTMLDivElement | null>(null);
  const [barWidth, setBarWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      switch (true) {
        case windowWidth <= s.max:
          setBarWidth(40);
          break;
        default:
          setBarWidth(50);
          break;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const labels = data.map((item) => item.name);
    const ctx = (
      document.getElementById("myBarChart") as HTMLCanvasElement
    )?.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx as CanvasRenderingContext2D, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Percentage Usage",
            data: data.map(
              (_, index) =>
                index === activeTab ? parseFloat(data[index].percentage) : 0 // الأعمدة الأخرى تظل 0
            ),
            backgroundColor: [color, color, color, color],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 0,
            borderRadius: 10,
            barThickness: barWidth,
            maxBarThickness: 50,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 1500,
          easing: "easeOutBounce",
        },
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0)",
            },
            border: {
              color: "rgba(54, 162, 235, 1)",
            },
            ticks: {
              color: "white",
            },
            max: 100,
          },
          y: {
            beginAtZero: true,
            max: 200,
            grid: {
              color: "rgba(255, 255, 255, 0)",
            },
            border: {
              color: "rgba(255, 99, 132, 1)",
            },
            ticks: {
              color: "white",
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [color, barWidth]);

  useEffect(() => {
    fetchAllRepoLanguages(repos, "tahaalkadi58").then((languages) => {
      if (languages) {
        const totalSize = Object.values(languages).reduce((a, b) => a + b, 0);

        const stats = Object.entries(languages).map(([language, size]) => ({
          name: language,
          percentage: ((size / totalSize) * 100).toFixed(2),
        }));
        setStats(stats);
      }
    });
  }, []);
  return (
    <section
      className={styles["bar-chart"]}
      data-aos="zoom-in"
      data-aos-offset={50}
      data-aos-delay={"100"}
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <SectionTitle className={styles["section-title"]}>
        My Project Used Techs Percentage
      </SectionTitle>
      <div
        style={{
          zIndex: "20",
        }}
        ref={ref}
        className={styles["myBarChart-container"]}
      >
        <canvas id="myBarChart"></canvas>
      </div>
    </section>
  );
};

export default GitHubCharts;
