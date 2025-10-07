// src/app/news/components/NewsArticleCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '../page'; // <-- Importujemy typ z głównego pliku page.tsx

type NewsArticleCardProps = {
  article: NewsArticle;
};

const NewsArticleCard = ({ article }: NewsArticleCardProps) => (
  <Link
    href={`/news/${article.slug}`}
    className="block group bg-transparent border-2 border-philippineSilver hover:font-semibold shadow-lg hover:shadow-2xl hover:scale-105 rounded-3xl overflow-hidden hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250"
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0 md:w-5/12">
        <div className="relative h-48 md:h-full w-full">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
      <div className="p-8 md:w-7/12">
        <p className="text-sm font-bold uppercase tracking-wide">{article.date}</p>
        <h2 className="mt-2 text-2xl font-bold transition-colors">{article.title}</h2>
        <p className="mt-4">{article.excerpt}</p>
        <p className="mt-6 font-bold">Czytaj dalej →</p>
      </div>
    </div>
  </Link>
);

export default NewsArticleCard;