import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import './Reports.css';
import { BASE_URL } from '../properties';

function Reports() {
    const [accuracyData, setAccuracyData] = useState();
    const [accuracyOptions, setAccuracyOptions] = useState();
    const [costData, setCostData] = useState();
    const [costOptions, setCostOptions] = useState();

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/api/charts/reports`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (Array.isArray(response.data)) {
                    const devices = response.data.map(item => item.device);
                    const accuracies = response.data.map(item => item.accuracy);
                    const costs = response.data.map(item => {
                        return parseFloat(item.cost.replace('€', ''));
                    });

                    // Prepare the accuracy chart data
                    const accuracyChartData = {
                        labels: devices,
                        datasets: [
                            {
                                label: 'Accuracy of Step Count and Heart Rate Monitoring',
                                data: accuracies,
                                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            }
                        ]
                    };

                    const accuracyChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: 'Accuracy (%)'
                                }
                            }
                        }
                    };

                    // Prepare the cost chart data
                    const costChartData = {
                        labels: devices,
                        datasets: [
                            {
                                label: 'Cost of Devices (€)',
                                data: costs,
                                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                                borderColor: 'rgba(255, 159, 64, 1)',
                                borderWidth: 1,
                            }
                        ]
                    };

                    const costChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: 'Cost (€)'
                                }
                            }
                        }
                    };

                    setAccuracyData(accuracyChartData);
                    setAccuracyOptions(accuracyChartOptions);
                    setCostData(costChartData);
                    setCostOptions(costChartOptions);
                } else {
                    console.error("Invalid data format received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchChartData();
    }, []);

    // Render the charts only if data and options are available
    return (
        <div role="region" aria-labelledby="reports-title">
            <h2 id="reports-title">Reports: Smartwatch Metrics</h2>
            <div className="report-content">
                {/* Accuracy Chart Section */}
                <div className="chart-section" aria-labelledby="accuracy-chart-title">
                    <h3 id="accuracy-chart-title">Accuracy of Step Count and Heart Rate Monitoring</h3>
                    {accuracyData && accuracyOptions ? (
                        <div className="chart-container">
                            <Bar data={accuracyData} options={accuracyOptions} aria-label="Bar chart showing accuracy of step count and heart rate monitoring" />
                        </div>
                    ) : (
                        <p>Loading accuracy chart data...</p>
                    )}
                    <div className="text-section">
                        <p>This chart illustrates the accuracy of step count and heart rate monitoring for various smartwatches. The data shows that devices like the Apple Watch have high accuracy for both metrics, with step count at 99.1% and heart rate measurement at 99.9%. Other devices such as the MisFit Shine and Motorola Moto 360 also exhibit good accuracy, contributing valuable options for health monitoring.</p>
                        <p>Source: Data adapted from research article <a href="https://www.mdpi.com/1424-8220/21/16/5589" target="_blank" rel="noopener noreferrer">See the full article</a>.</p>
                    </div>
                </div>

                {/* Cost Chart Section */}
                <div className="chart-section" aria-labelledby="cost-chart-title">
                    <h3 id="cost-chart-title">Cost of Devices</h3>
                    {costData && costOptions ? (
                        <div className="chart-container">
                            <Bar data={costData} options={costOptions} aria-label="Bar chart showing cost of the devices used in the experiment" />
                        </div>
                    ) : (
                        <p>Loading cost chart data...</p>
                    )}
                    <div className="text-section">
                        <p>This chart shows the cost of various smartwatches in USD. Devices like the Apple Watch are on the higher end of the price spectrum, whereas options such as the MisFit Shine provide more affordable alternatives while still offering decent accuracy for health monitoring metrics.</p>
                        <p>Source: Data adapted from research article <a href="https://www.mdpi.com/1424-8220/21/16/5589" target="_blank" rel="noopener noreferrer">See the full article</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
