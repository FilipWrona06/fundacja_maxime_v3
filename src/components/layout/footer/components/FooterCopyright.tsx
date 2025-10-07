// src/components/layout/footer/components/FooterCopyright.tsx

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-philippineSilver mt-12 pt-8 text-center text-sm font-montserrat">
      <p>
        &copy; {currentYear} Fundacja Maxime. Wszelkie prawa zastrzeżone | Wykonanie:
        <a 
          href="https://www.instagram.com/filip_wrona/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-philippineSilver hover:scale-105 duration-250 transition-colors"
        >
          <span> Filip Wrona</span>
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;