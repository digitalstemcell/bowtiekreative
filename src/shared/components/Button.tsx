interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105';

  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg border-2 border-transparent',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg border-2 border-transparent',
    outline: 'border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow-md'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
