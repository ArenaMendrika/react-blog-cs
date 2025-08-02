import React, { useEffect, useState } from 'react';
import { fetchTechArticles } from '../services/fetchArticles';
import 'bootstrap/dist/css/bootstrap.min.css';

function TechPosts() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchTechArticles();
        setArticles(data);
      } catch (error) {
        console.error("Erreur de chargement des articles :", error);
      }
    };
    loadArticles();
  }, []);

  return (
<div className="container my-5">
  <div className="row">
    {articles.length > 0 ? (
      articles.map(article => (
        <div key={article.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
          <div className="card w-100 h-100 shadow-sm">
            <img 
              src={article.cover_image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"} 
              className="card-img-top img-fluid"
              alt="cover"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <div className="mb-2">
                <small className="text-muted">
                  {new Date(article.published_at).toLocaleDateString('en-EN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })} • {article.reading_time_minutes} min of lecture
                </small>
              </div>
              <h5 className="card-title fw-bold">{article.title}</h5>
              <p className="card-text text-muted flex-grow-1">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="btn mt-auto"
                style={{ backgroundColor: '#1e3a5f', color: 'white' }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-12 text-center mt-5">
        <p className="text-muted">Aucun article en anglais ou en français trouvé.</p>
      </div>
    )}
  </div>
</div>
  );
}

export default TechPosts;
