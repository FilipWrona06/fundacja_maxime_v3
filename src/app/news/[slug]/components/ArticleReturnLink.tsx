// src/app/news/[slug]/components/ArticleReturnLink.tsx
import Button from '@/components/Button';

const ArticleReturnLink = () => (
  <div className="text-center mt-12">
    <Button
      as="link"
      href="/news"
      variant="secondary"
      className="rounded-full px-8 py-3 text-sm tracking-wider"
    >
      ← Wróć do aktualności
    </Button>
  </div>
);

export default ArticleReturnLink;