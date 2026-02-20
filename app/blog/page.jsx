import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <h1>Marketing Tips</h1>
      <ul>
        <li>Tip 1: Understand your audience.</li>
        <li>Tip 2: Use social media effectively.</li>
        <li>Tip 3: Create engaging content.</li>
        <li>Tip 4: Monitor your analytics.</li>
        <li>Tip 5: Test and optimize your campaigns.</li>
      </ul>
      <h2>Subscribe to our Newsletter</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default BlogPage;
