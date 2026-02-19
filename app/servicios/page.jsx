import React from 'react';

const ServicesPage = () => {
    const services = [
        {
            name: 'SEO Optimization',
            description: 'Improve your website’s visibility on search engines.',
            price: '$300'
        },
        {
            name: 'Social Media Marketing',
            description: 'Engage your audience on social platforms.',
            price: '$500'
        },
        {
            name: 'Email Marketing Campaigns',
            description: 'Reach your customers directly in their inbox.',
            price: '$250'
        },
        {
            name: 'Content Creation',
            description: 'High-quality content to attract and retain customers.',
            price: '$400'
        },
        {
            name: 'Pay-Per-Click Advertising',
            description: 'Instant visibility through targeted ads.',
            price: '$350'
        },
    ];

    return (
        <div>
            <h1>Our Marketing Services</h1>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p><strong>Price: {service.price}</strong></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesPage;