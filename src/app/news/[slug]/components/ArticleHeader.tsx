// src/app/news/[slug]/components/ArticleHeader.tsx

type ArticleHeaderProps = {
  title: string;
  date: string;
};

const ArticleHeader = ({ title, date }: ArticleHeaderProps) => (
  <header>
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      {title}
    </h1>
    <p className="mt-4 text-lg">
      Opublikowano: {date}
    </p>
  </header>
);

export default ArticleHeader;