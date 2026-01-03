const Card = ({ children, className = '', hover = false }) => {
  const baseStyles = 'bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

