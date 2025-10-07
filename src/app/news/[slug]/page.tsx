// src/app/news/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { newsData } from '../page'; // <-- KLUCZOWY IMPORT Z CENTRALNEGO PLIKU!

import ArticleBanner from './components/ArticleBanner';
import ArticleHeader from './components/ArticleHeader';
import ArticleContent from './components/ArticleContent';
import ArticleReturnLink from './components/ArticleReturnLink';


// Funkcja generująca strony również korzysta z centralnych danych
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

// Główny komponent strony
export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Logika wyszukiwania artykułu pozostaje tutaj
  const article = newsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <ArticleBanner src={article.imageSrc} alt={article.title} />
        <ArticleHeader title={article.title} date={article.date} />
        <hr className="my-8 border-philippineSilver" />
        <ArticleContent htmlContent={article.content} />
        <ArticleReturnLink />
      </div>
    </main>
  );
};