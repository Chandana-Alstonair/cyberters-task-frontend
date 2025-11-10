interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-16',
    md: 'w-16 h-20',
    lg: 'w-20 h-24'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/cyberters-logo.png" 
        alt="Cyberters" 
        className={sizeClasses[size]} 
      />
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          CYBERTERS
        </span>
      )}
    </div>
  );
}