const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer hover:bg-black/90 active:scale-95 flex items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
