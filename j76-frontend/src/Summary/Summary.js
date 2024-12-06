import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Summary.css';

function Summary() {
    // Sample data for the pie chart (e.g., distribution of health conditions addressed by wearables)
    const chartData = {
        labels: ['Cardiology', 'Respiratory', 'Neurology', 'Endocrinology', 'Orthopedics', 'Oncology', 'Mental Health'],
        datasets: [
            {
                label: 'Wearable Health Device Applications',
                data: [15, 12, 10, 8, 10, 7, 8], // Sample data representing focus or prevalence
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#A2D5F2',
                    '#B1A4FF',
                    '#FFB0A1',
                    '#4B86B6',
                ],
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
    };

    return (
        <div role="region" aria-labelledby="summary-title">
            <h2 id="summary-title">Summary of Wearable Health Devices in Chronic Disease Management</h2>
            <p>Wearable health devices have revolutionized chronic disease management by providing continuous monitoring and personalized patient care. They are utilized across various medical fields, including:</p>
            <ul>
                <li><strong>Cardiology:</strong> Advanced devices for cardiac monitoring, such as single-lead ECG patches and smartwatches, allow real-time detection and management of arrhythmias, leading to early interventions and improved patient outcomes.</li>
                <li><strong>Respiratory:</strong> Devices that monitor respiratory rate and oxygen saturation help manage conditions like COPD and asthma, offering alerts for exacerbations and facilitating remote patient monitoring.</li>
                <li><strong>Neurology:</strong> Wearables equipped with accelerometers monitor motor activity, essential for detecting seizures and distinguishing between epilepsy and psychogenic nonepileptic seizures (PNES).</li>
                <li><strong>Endocrinology:</strong> Innovations like artificial pancreas systems and CGM systems improve blood glucose control in diabetes, enhancing adherence and patient quality of life.</li>
                <li><strong>Orthopedics:</strong> Sensors track joint movements, monitor gait patterns, and help prevent injuries by analyzing muscle activity and detecting abnormal patterns.</li>
                <li><strong>Oncology:</strong> Devices enable real-time health monitoring, supporting early cancer detection and remote clinical trial monitoring for better patient care.</li>
                <li><strong>Mental Health:</strong> Wearables measure physiological signals like heart rate variability and skin conductance to detect stress and depression, enabling early intervention and personalized mental health support.</li>
            </ul>
            <p>Wearable technology has become indispensable in promoting patient engagement, improving treatment outcomes, and facilitating proactive healthcare.</p>
            <h3>Application Areas of Wearable Devices</h3>
            <div className="summary-chart-container" role="presentation">
                <Pie data={chartData} options={chartOptions} aria-label="Pie chart showing health conditions addressed by wearable health devices" />
            </div>
            <p>The pie chart above illustrates the various health conditions addressed by wearable health devices and their potential contributions to improving patient care.</p>
        </div>
    );
}

export default Summary;
