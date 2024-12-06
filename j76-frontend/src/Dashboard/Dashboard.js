import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
    <div className="dashboard-container" role="main">
        <h2 className="dashboard-title">Dashboard</h2>
        
        <section className="section" aria-labelledby="summary-section-title">
            <h3 id="summary-section-title" className="section-title">Summary: The Role of Wearable Devices in Chronic Disease Monitoring</h3>
            <p className="section-content">
                Wearable health devices are becoming vital in chronic disease management because they offer real-time monitoring and personalized care. 
                This review explores their effectiveness and challenges across medical fields, including cardiology, respiratory health, neurology, endocrinology, 
                orthopedics, oncology, and mental health. A thorough literature search identified studies focusing on wearable devices’ impact on patient outcomes. 
                In cardiology, wearables have proven effective for monitoring hypertension, detecting arrhythmias, and aiding cardiac rehabilitation. 
                In respiratory health, these devices enhance asthma management and continuous monitoring of critical parameters. Neurological applications include 
                seizure detection and Parkinson’s disease management, with wearables showing promising results in improving patient outcomes. In endocrinology, 
                wearable technology advances thyroid dysfunction monitoring, fertility tracking, and diabetes management. Orthopedic applications include improved 
                postsurgical recovery and rehabilitation, while wearables help in early complication detection in oncology. Mental health benefits include anxiety 
                detection, post-traumatic stress disorder management, and stress reduction through wearable biofeedback. In conclusion, wearable health devices 
                offer transformative potential for managing chronic illnesses by enhancing real-time monitoring and patient engagement. Despite significant 
                improvements in adherence and outcomes, challenges with data accuracy and privacy persist. However, with ongoing innovation and collaboration, 
                we can all be part of the solution to maximize the benefits of wearable technologies in healthcare.
            </p>
            <p className="section-content">
                <strong>Source:</strong> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11461032/" target="_blank" rel="noopener noreferrer" aria-label="Read the full article">Read the full article</a>
            </p>
        </section>

        <section className="section" aria-labelledby="technical-aspects-title">
            <h3 id="technical-aspects-title" className="section-title">Technical Aspects of This Project</h3>
            <p className="section-content">
                This project is built using a modern tech stack comprising <strong>React </strong>for the frontend and <strong>Java </strong>with <strong>Spring Boot </strong> 
                for the backend, backed by <strong>MongoDB </strong>as the database. The frontend is designed as a responsive single-page application, 
                communicating with the backend via HTTP calls. The backend handles user authentication using JSON Web Tokens (JWT) for secure, token-based access. 
                The JWT tokens have an expiration period to enhance security, ensuring that user sessions are limited and require re-authentication after a set duration (3 mins).
                It employs a Tomcat-based embedded server for running the Spring Boot application, ensuring seamless integration with the frontend hosted on 
                Apache. This approach prioritizes scalability and maintainability. The Node.js development server supports frontend development during 
                build time. The app has been structured to accommodate modular functionality, including a login page for user authentication, a dashboard page 
                containing summary and technical aspects of the project, and additional pages such as "Summary" and "Reports" that are accessible only post-login.
            </p>
        </section>

        <section className="section" aria-labelledby="future-considerations-title">
            <h3 id="future-considerations-title" className="section-title">Future Considerations</h3>
            <p className="section-content">
                Moving forward, the application could be enhanced with additional features such as integrating real-time data streams from wearable devices, 
                implementing advanced security measures, and providing comprehensive data analytics. Improved ADA/WCAG compliance will also ensure a more 
                inclusive user experience. The design could be refined to better showcase the charts and include more interactive features to engage users further.
            </p>
        </section>
    </div>
    );
}

export default Dashboard;
