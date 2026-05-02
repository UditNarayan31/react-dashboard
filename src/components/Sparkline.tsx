import { useState } from "react";
import { User, ShoppingCart, Activity } from "lucide-react"; // icon lib

const chartData = {
  Accounts: {
    value: 130,
    label: "Peak in December",
    icon: User,
    path: `M 40 130 
           Q 130 115 220 105 
           Q 310 95 400 85 
           Q 490 75 580 70 
           Q 670 65 760 55 
           Q 850 45 940 40 
           Q 1030 35 1120 25`,
  },
  Purchase: {
    value: 95,
    label: "Peak in October",
    icon: ShoppingCart,
    path: `M 40 150 
           Q 130 140 220 130 
           Q 310 120 400 110 
           Q 490 100 580 95 
           Q 670 90 760 85 
           Q 850 80 940 75 
           Q 1030 70 1120 60`,
  },
  Sessions: {
    value: 160,
    label: "Peak in November",
    icon: Activity,
    path: `M 40 140 
           Q 130 120 220 110 
           Q 310 100 400 90 
           Q 490 80 580 75 
           Q 670 70 760 60 
           Q 850 55 940 45 
           Q 1030 40 1120 30`,
  },
};

export default function Sparkline() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof chartData>("Accounts");
  const current = chartData[activeTab];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative bottom-5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 ml-8">
          Performance
        </h3>

        <div className="text-right">
          <div className="flex gap-2 mb-2 justify-end">
            {Object.entries(chartData).map(([tab, data]) => {
              const Icon = data.icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as keyof typeof chartData)}
                  className={`flex items-center justify-center px-3 py-1 rounded-full transition ${
                    activeTab === tab
                      ? "bg-(--primary-color) text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {/* Mobile → icon */}
                  <span className="block sm:hidden">
                    <Icon size={16} />
                  </span>

                  <span className="hidden sm:block text-xs">{tab}</span>
                </button>
              );
            })}
          </div>

          <p className="text-3xl font-bold text-(--primary-color)">
            {current.value}
          </p>
          <p className="text-xs text-(--primary-color)">{current.label}</p>
        </div>
      </div>

      <div className="relative w-full">
        <svg
          width="100%"
          height="180"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          className="block"
        >
          <defs>
            <linearGradient
              id="sparkGradient"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#e14eca" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#e14eca" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d={current.path}
            fill="none"
            stroke="#e14eca"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={`${current.path} L 1120 170 L 40 170 Z`}
            fill="url(#sparkGradient)"
          />
        </svg>

        <div className="absolute left-0 right-0 bottom-0 flex justify-between text-xs text-gray-500 px-[40px]">
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((m) => (
            <span key={m} className="w-20 text-center">
              {m}
            </span>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-45 flex flex-col justify-between text-xs text-gray-400 font-medium">
          {[160, 130, 95, 80, 60].map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
