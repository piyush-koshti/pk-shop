import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import HomeHeader from "../home-header/home-header.component";
/* Example assuming you're using CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./projects.component.scss";
import Footer from '../footer/footer.component';

function Projects() {
    const { id } = useParams();
    const [projectId, setProjectId] = useState(0);
    useEffect(() => {
        if(id) {
            setProjectId(id);
        }
        // Find the element with the corresponding ID
    }, [id]);
    useEffect(() => {
        if(projectId != 0 && projectId != 1){
            const projectElement = document.getElementById(`project-${projectId}`);
            if (projectElement) {
                // Scroll to the element
                projectElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [projectId])
    return (
        <>
            <div className="profile-data">
                <div className="project-header">
                    <HomeHeader />
                </div>
                <div className="container custom-container d-grid gap-3 pt-4">
                    <div className="pt-1 row text-align-center">
                    <div className="d-flex col-md-12  justify-content-center">
                        <h2>My Projects</h2>
                    </div>
                    </div>
                    <div className="border" id="project-1">
                    <strong>CLINIC BOOKING MANAGEMENT SYSTEM</strong>
                    <p>
                        <b>Duration:</b> working with last one year
                        <br />
                        <b>Technology:</b> Laravel + ReactJs + VueJs
                        <br />
                        Implemented a multifaceted system encompassing various user roles,
                        driving diverse functionalities and <br />
                        <b>enhancing user engagement:</b>
                        Engaged Normal Users in browsing products, placing orders, and
                        accessing basic functionalities within the platform, ensuring a
                        seamless shopping experience. Empowered Non-Prescriber Users with
                        access to specific features focused on purchasing products and
                        managing orders, excluding prescription-related actions. Enabled
                        Prescriber Users to create and manage medical prescriptions,
                        leveraging the system for medical- related interactions and medicine
                        orders. Facilitated Vendors in managing inventory, product listings,
                        and order fulfillment, ensuring smooth processing and product
                        availability. Administered comprehensive control to Admins,
                        empowering them to manage user roles, system functionalities, and
                        ensure the platform's smooth operation. Simultaneously, seamlessly
                        integrated Stripe, Ryft, and Zing payment gateways, offering users
                        diverse and secure payment options for transactions. Introduced a
                        comprehensive clinic review system, encouraging users to share
                        feedback, enabling informed decisions for healthcare
                        services.Enabled location-specific treatment tracking, enhancing
                        convenience and accessibility for users seeking treatments at
                        specific locations. Provided a robust order tracking system,
                        empowering users to efficiently monitor and manage their orders
                        within the platform. Empowered Prescriber Users to seamlessly create
                        and manage medical prescriptions within the system This multifaceted
                        approach ensured a diverse range of functionalities catering to
                        distinct user roles while emphasizing user engagement, convenience,
                        and system efficiency
                    </p>
                    </div>
                    <div className="border" id="project-2">
                    <strong> PROJECT: E-Commerce Project </strong>
                    <p>
                        <b>Duration:</b> working with last one year
                        <br />
                        <b>Technology:</b> Laravel + Codeigniter + VueJs
                        <br />
                        <b>Full Calendar with Multiple Views:-</b>
                        <br />
                        <span>
                        <b>Monthly, Weekly, Daily Views:</b>
                        </span>{" "}
                        Use a JavaScript library like FullCalendar.js to create a calendar.
                        <br />
                        Implement different views for monthly, weekly, and daily schedules.
                        <br />
                        <span>
                        <b>Event Management:</b>
                        </span>{" "}
                        Create a system for adding events with details like title,
                        description, date, and time. Integrate event creation functionality
                        within the calendar interface.
                        <br />
                        <span>
                        <b>Reminder and Notification:</b>
                        </span>
                        Implement a notification system for reminders.
                        <br />
                        Utilize tools like push notifications or email reminders for
                        upcoming events.
                        <br />
                        <b>Email Builder for Admin:-</b>
                        <br />
                        <span>
                        <b>Email Subject and Content Management:</b>
                        </span>{" "}
                        Design an admin interface to add email subjects, content, and
                        dynamic variables. Store this information in a database or a
                        structured format.
                        <span>
                        <b>Dynamic Variables in Emails:</b>
                        </span>
                        Set up a system to manage and replace dynamic variables within the
                        email content. Have a controller that handles the dynamic variables
                        and replaces them with appropriate values.
                    </p>
                    </div>
                    <div className="border mb-3" id="project-3">
                    <strong> PROJECT: E-Commerce Project Cone Cosmetics </strong>
                    <p>
                        <b>Duration:</b> one year
                        <br />
                        <b>Technology:</b> Laravel + Shopware + Symfony + VueJs
                        <br />
                        <span>
                        <b>Dynamic Product Pricing by Country:</b>
                        </span>{" "}
                        Implement a mechanism to detect and capture the user's country code.
                        <br />
                        Have a database or pricing algorithm that adjusts prices based on
                        the country selected.
                        <br />
                        <span>
                        <b>Theme Components:</b>
                        </span>{" "}
                        Develop modular components like page banners that can be dynamically
                        integrated into different sections of the site.
                        <br />
                        Create a system to manage and display dynamic categories based on
                        user preferences or product attributes.
                        <br />
                        <span>
                        <b>Related Products on Cart Page:</b>
                        </span>
                        Utilize the category information to display related products in the
                        cart.
                        <br />
                        Implement algorithms that suggest products based on user behavior,
                        like most-viewed or purchased items.
                        <br />
                        <span>
                        <b>Academy Section:</b>
                        </span>{" "}
                        Organize sessions or courses into categories or sessions.
                        <br />
                        Create a user-friendly interface to display these sessions and their
                        details.
                        <br />
                        <span>
                        <b>Chatbot for Client Communication:</b>
                        </span>
                        Develop a chatbot that can handle queries from both the admin and
                        vendor sides.
                        <br />
                        Integrate the chatbot into the site to facilitate communication.
                        <br />
                        <span>
                        <b>User Cart and Purchase Flow:</b>
                        </span>
                        Implement standard e-commerce functionalities for adding products to
                        the cart and completing purchases.
                        <br />
                        Ensure a smooth checkout process with options for payment and
                        shipping.
                        <br />
                    </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
