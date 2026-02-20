import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border rounded p-2" required />
          <input type="email" placeholder="Email" className="border rounded p-2" required />
          <input type="text" placeholder="Phone" className="border rounded p-2" />
          <input type="text" placeholder="Company" className="border rounded p-2" />
          <select className="border rounded p-2">
            <option value="">Select Service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
          </select>
          <textarea placeholder="Message" className="border rounded p-2" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4">Submit</button>
      </form>
      <section className="contact-info mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
        <p>Hours: Mon-Fri 9am - 5pm</p>
      </section>
      <section className="social-media">
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <a href="https://facebook.com" className="mr-4">Facebook</a>
        <a href="https://twitter.com" className="mr-4">Twitter</a>
        <a href="https://linkedin.com" className="mr-4">LinkedIn</a>
        <a href="https://instagram.com">Instagram</a>
      </section>
    </div>
  );
};

export default ContactPage;