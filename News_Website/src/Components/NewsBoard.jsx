import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setArticles(data.articles);
        } else {
          throw new Error(data.message || "Error fetching news");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading when fetch is complete
      }
    };

    fetchNews();
  }, [category]); // Re-fetch news when the category prop changes

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span> in {category}
      </h2>

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="row">
        {articles.length > 0 ? (
          articles.map((news) => (
            <div key={news.url} className="col-md-4 mb-4">
              <NewsItems
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
