import mockData from "@/mockData";
import { cn } from "@/utils/tw_merge";

const Home = () => {
  const possible = [
    "bg-red-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-green-200",
    "bg-indigo-200",
  ];

  return (
    // this extra div prevents div to take full screen if space remains
    // due to less number of cards
    <div>
      <div className="grid flex-1 md:grid-cols-2 gap-4 p-4">
        {mockData.map((d, i) => {
          const classes = `rounded-xl h-auto shadow-xl p-4 ${d.color}`;
          return (
            <div key={i.toString()} className={cn(classes)}>
              <h1 className="text-6xl text-left mb-8">{d.title}</h1>
              <p className="dark:text-gray-400">{d.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
