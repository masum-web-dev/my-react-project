import { use, useState } from 'react';
import type { Technology as TechnologyType } from '../Types of data/technology';
import Technology from './Technology';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';

interface TechnologiesProps {
  techPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<TechnologyType[]>([]);

const handleStack = (tech: TechnologyType) => {
  const exist = stack.filter((item) => item.id === tech.id);
  if (exist.length === 0) {
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

  const handleRemoveStack = (id: string | number) => {
  const remainingStack = stack.filter((item) => item.id !== id);
  setStack(remainingStack);
};

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-6xl font-bold my-2.5">
          Explore the <span className="text-pink-600">Technologies</span>
        </h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <Technology 
              key={technology.id} technology={technology} handleStack={handleStack} stack={stack}
            />
          ))}
        </div>

        <div className="lg:col-span-1 border rounded-xl p-4 h-fit">
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-xs text-gray-400">{stack.length} Technology Selected</p>
          
          {stack.length === 0 ? (
            <div className="mt-4 border-2 border-dashed p-6 text-center text-xs text-gray-400 rounded-lg">
              No technology added yet
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              {stack.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-base-200 rounded-lg">
                  
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>

                  <button 
                    onClick={() => handleRemoveStack(item.id)}
                    className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500 hover:bg-red-50 p-1 transition-colors"
                    title="Remove"
                  >
                    <RxCross2 className="text-base" />
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Technologies;