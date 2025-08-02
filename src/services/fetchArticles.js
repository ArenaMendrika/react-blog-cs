import axios from 'axios';

export const fetchTechArticles = async () => {
  const response = await axios.get('https://dev.to/api/articles?tag=technology&per_page=20');
  const articles = response.data;

  const englishArticles = articles.filter(article => article.language === 'en');

  return englishArticles;
};
