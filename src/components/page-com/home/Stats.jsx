import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#005555", "#e74c3c", "#f1c40f"];

const Stats = ({ reviews }) => {
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((sum, review) => sum + parseInt(review.rating), 0) /
          totalReviews
        ).toFixed(1)
      : 0;
  const uniqueShops = new Set(reviews.map((review) => review.shopName)).size;

  const statsData = [
    { label: "Total Reviews", value: totalReviews, color: COLORS[0] },
    { label: "Average Rating", value: Number(averageRating), color: COLORS[1] },
    { label: "Unique Shops", value: uniqueShops, color: COLORS[2] },
  ];

  const renderPie = (value, color, label) => {
    const data = [
      { name: label, value },
      { name: "Remaining", value: Math.max(1, value === 0 ? 1 : 0) }, // filler to make circle
    ];
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill={color} />
                <Cell fill="#ddd" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {value}
          </div>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
      </div>
    );
  };

  return (
    <div className="card mt-20">
      <h3 className="title text-center mb-6">Review Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat) =>
          renderPie(stat.value, stat.color, stat.label)
        )}
      </div>
    </div>
  );
};

export default Stats;
