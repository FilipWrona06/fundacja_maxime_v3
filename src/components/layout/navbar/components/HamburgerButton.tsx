// src/components/layout/navbar/components/HamburgerButton.tsx
type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
  <button
    onClick={onClick}
    className="focus:outline-none z-10"
    aria-label="Menu"
    aria-expanded={isOpen}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
      />
    </svg>
  </button>
);

export default HamburgerButton;