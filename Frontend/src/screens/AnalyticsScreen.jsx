import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { REACT_APP_API_URL } from "../router";
import { FaChartPie, FaChartBar } from "react-icons/fa";
import Chart from "chart.js/auto"; // Import Chart.js

function AnalyticsScreen() {
  const [deviceData, setDeviceData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const barChartRef = useRef(null);
  const pieChartRef1 = useRef(null);
  const pieChartRef2 = useRef(null);

  useEffect(() => {
    fetchAnalyticsData();
    return () => {
      if (barChartRef.current) barChartRef.current.destroy();
      if (pieChartRef1.current) pieChartRef1.current.destroy();
      if (pieChartRef2.current) pieChartRef2.current.destroy();
    };
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const deviceResponse = await axios.get(`${REACT_APP_API_URL}/api/devices/types/count`, { withCredentials: true });
      const userResponse = await axios.get(`${REACT_APP_API_URL}/api/users/locations/count`, { withCredentials: true });
      const storageResponse = await axios.get(`${REACT_APP_API_URL}/api/storages/locations/count`, { withCredentials: true });

      setDeviceData(deviceResponse.data.devices || []);
      setUserData(userResponse.data.users || []);
      setStorageData(storageResponse.data.storages || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error fetching analytics data. Please try again later.");
      console.error("Error fetching analytics data:", error.response || error.message || error);
    }
  };

  const prepareDeviceChartData = () => {
    if (!Array.isArray(deviceData) || deviceData.length === 0) {
      return { labels: ['No Data'], datasets: [{ label: "Device Types", data: [0], backgroundColor: "#FFEB3B" }] };
    }

    const colors = deviceData.map((item, index) => index === 0 ? "#FFEB3B" : "#2196F3"); 


    return {
      labels: deviceData.map((item) => `${item.type} (${item.count})`),
      datasets: [
        {
          label: "Device Types",
          data: deviceData.map((item) => item.count),
          backgroundColor: colors,
        },
      ],
    };
  };

  const prepareUserChartData = () => ({
    labels: userData.length > 0 ? userData.map((item) => `${item.location} (${item.count})`) : ['No Data'],
    datasets: [
      {
        label: "Users per Location",
        data: userData.length > 0 ? userData.map((item) => item.count) : [0],
        backgroundColor: userData.length > 0
          ? userData.map((_, index) => `hsl(${(index * 360) / userData.length}, 70%, 60%)`)
          : ["#2196f3"],
        hoverOffset: 8,
      },
    ],
  });

  const prepareStorageChartData = () => {
    return {
      labels: storageData.length > 0 ? storageData.map((item) => `${item.locationName} (${item.count})`) : ['No Data'],
      datasets: [
        {
          label: "Storages per Location",
          data: storageData.length > 0 ? storageData.map((item) => item.count) : [0],
          backgroundColor: storageData.length > 0
            ? storageData.map((_, index) => `hsl(${(index * 200) / storageData.length + 200}, 70%, 60%)`) // Ensure blue hue by starting at 200° on the hue scale
            : ["#2196F3"], // fallback color (blue)
          hoverOffset: 8,
        },
      ],
    };
  };
  
  

  const renderNoDataMessage = (data, chartType) => {
    if (!Array.isArray(data) || data.length === 0) {
      return (
        <div className="text-center text-gray-500 mt-4">
          <p>No data available for {chartType}</p>
        </div>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full px-10 py-6 bg-gray-100">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Analytics Overview</h1>
        <p className="text-xl text-gray-600">Insights into your devices, users, and storage distributions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Device Types Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Device Types Distribution</h2>
          <Pie
            ref={pieChartRef1}
            data={prepareDeviceChartData()}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                  },
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  titleFont: { weight: 'bold' },
                  bodyFont: { size: 14 },
                  displayColors: false,
                },
                legend: {
                  position: 'top',
                  labels: {
                    font: { size: 14, weight: 'bold' },
                    padding: 20,
                    boxWidth: 15,
                  },
                },
              },
              animation: {
                duration: 1200, // Smooth transition
                easing: "easeOutBounce",
              },
            }}
          />
          {renderNoDataMessage(deviceData, "Device Types")}
        </div>

        {/* Users by Location */}
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users by Location</h2>
          <Pie
            ref={pieChartRef2}
            data={prepareUserChartData()}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                  },
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  titleFont: { weight: 'bold' },
                  bodyFont: { size: 14 },
                  displayColors: false,
                },
                legend: {
                  position: 'top',
                  labels: {
                    font: { size: 14, weight: 'bold' },
                    padding: 20,
                    boxWidth: 15,
                  },
                },
              },
              animation: {
                duration: 1200, // Smooth transition
                easing: "easeOutBounce",
              },
            }}
          />
          {renderNoDataMessage(userData, "Users")}
        </div>

        {/* Storages by Location */}
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Storages by Location</h2>
          <Pie
            ref={pieChartRef2}
            data={prepareStorageChartData()}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                  },
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  titleFont: { weight: 'bold' },
                  bodyFont: { size: 14 },
                  displayColors: false,
                },
                legend: {
                  position: 'top',
                  labels: {
                    font: { size: 14, weight: 'bold' },
                    padding: 20,
                    boxWidth: 15,
                  },
                },
              },
              animation: {
                duration: 1200, // Smooth transition
                easing: "easeOutBounce",
              },
            }}
          />
          {renderNoDataMessage(storageData, "Storages")}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsScreen;
