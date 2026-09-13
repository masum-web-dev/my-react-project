import { use } from 'react';
import type { Technology as TechnologyType } from '../Types of data/technology';
import Technology from './Technology';

interface TechnologiesProps {
  techPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  return (
    <div className="container mx-auto p-4">
      {/* 1. Header Area */}
      <div className="mb-6">
        <h1 className="text-6xl font-bold my-2.5">
          Explore the <span className="text-pink-600">Technologies</span>
        </h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <Technology key={technology.id} technology={technology} />
          ))}
        </div>

        <div className="lg:col-span-1 border rounded-xl p-4 h-fit">
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-xs text-gray-400">0 Technology Selected</p>
          
          <div className="mt-4 border-2 border-dashed p-6 text-center text-xs text-gray-400 rounded-lg">
            No technology added yet
          </div>
        </div>

      </div>
    </div>
  );
};

export default Technologies;