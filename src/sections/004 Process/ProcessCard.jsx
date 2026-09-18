import { ArrowDown, ArrowRight } from 'lucide-react'; // Or your custom icon pack equivalents

export default function ProcessCard({ data, ifLast }) {
  const { Icon, title, content } = data;

  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
      {/* Main Process Card Content */}
      <div className="flex flex-col space-y-4 items-center md:max-w-60 overflow-hidden h-48 w-full text-center">
        <Icon size={35} />
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-balance">{content}</p>
      </div>

      {/* Conditional Connecting Arrow */}
      {!ifLast && (
        <div className="flex items-center justify-center my-4 md:my-0 md:mx-6 shrink-0 text-primary">
          {/* Arrow pointing DOWN on mobile screens */}
          <ArrowDown className="md:hidden" size={24} />
          
          {/* Arrow pointing RIGHT on medium screens and up */}
          <ArrowRight className="hidden md:block" size={24} />
        </div>
      )}
    </div>
  );
}
