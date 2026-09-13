import type { Technology as TechnologyType } from '../Types of data/technology';
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  technology: TechnologyType;
  handleStack: (tech: TechnologyType) => void;
  stack: TechnologyType[]; // 👈 ১. ইন্টারফেসে stack এর টাইপ বলে দিতে হবে
}

const Technology = ({ technology, handleStack, stack }: TechnologyCardProps) => {
  const exist = stack.filter((item) => item.id === technology.id);
  let isAdded = false;
  if (exist.length > 0) {
    isAdded = true;
  }

  return (
    <div className={`card bg-base-100 border p-6 flex flex-col justify-between transition-all duration-300 ${
      isAdded ? 'border-pink-500 ring-2 ring-pink-500/20 shadow-md' : 'border-gray-100 shadow-sm'
    }`}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={technology.icon} alt={technology.name} className="w-8 h-8 object-contain" />
          {technology.badge && (
            <span className="badge badge-soft badge-info text-xs px-3 py-1.5 rounded-full">
              {technology.badge}
            </span>
          )}
        </div>

        <h2 className="card-title text-xl font-bold text-slate-900 mb-2">{technology.name}</h2>
        <p className="text-gray-500 text-sm leading-relaxed">{technology.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{technology.category}</span>
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{technology.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700 ml-auto">
            <FaStar className="text-amber-400 text-sm" /> {technology.rating}
          </span>
        </div>

        <button 
          onClick={() => handleStack(technology)} disabled={isAdded}
          className={`btn w-full rounded-xl font-medium ${
            isAdded ? 'btn-disabled bg-pink-100 text-pink-600 border-pink-200 cursor-not-allowed' : 'btn-neutral'
          }`}
        >
          {isAdded ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default Technology;