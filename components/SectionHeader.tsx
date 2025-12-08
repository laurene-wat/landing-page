import React from 'react';
import { ArrowDown } from 'lucide-react';

interface Props {
  text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex justify-center items-center py-12 opacity-80 text-main animate-float">
      <span className="text-xs uppercase tracking-[0.01em] font-medium font-mono mr-2">{text}</span>
      <ArrowDown size={14} />
    </div>
  );
};

export default SectionHeader;