import React from 'react';
import { articles } from './data'; // Assume this imports marketing articles and industry insights

const BlogListingPage = () => {
    return (
        <div>
            <h1>Blog Listing</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.summary}</p>
                        <a href={article.link}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogListingPage;