// src/app/news/[slug]/components/ArticleContent.tsx

type ArticleContentProps = {
  htmlContent: string;
};

const ArticleContent = ({ htmlContent }: ArticleContentProps) => (
  <article
    className="prose prose-lg dark:prose-invert max-w-none"
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

export default ArticleContent;