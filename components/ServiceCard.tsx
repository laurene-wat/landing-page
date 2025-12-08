import React from 'react';

interface ServiceCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] hover:shadow-md transition-all duration-300 h-full flex flex-col min-h-[300px] border border-transparent ${className}`}>
      <h3 className="text-2xl font-normal mb-6 tracking-[-0.02em] text-main">{title}</h3>
      <div className="flex-grow flex items-center justify-center bg-transparent rounded-lg border-none overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;