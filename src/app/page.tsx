"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const fetchAricles = async () => {
    try {
      const response = await fetch("/blog");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAricles();
  }, []);

  return (
    <>
      <h1>Liste des articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </>
  );
}
