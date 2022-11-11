import Button from "../Button";
import {
  BarsArrowUpIcon,
  ChartBarIcon,
  FireIcon,
  ForwardIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

const Top = () => {
  return (
    <div className="space-y-1.5">
      <div>
        <Button className="flex items-center gap-2 border-solid text-lg font-thin">
          <TrophyIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
          <div>Best of the year</div>
        </Button>
      </div>
      <div>
        <Button className="flex items-center gap-2 border-solid text-lg font-thin">
          <BarsArrowUpIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
          <div>Popular 2022</div>
        </Button>
      </div>
      <div>
        <Button className="flex items-center gap-2 border-solid text-lg font-thin">
          <ChartBarIcon className="h-7 w-7 rounded-md bg-rawg-gray p-0.5" />
          <div>All time best</div>
        </Button>
      </div>
    </div>
  );
};

Top.propTypes = {};

export default Top;
