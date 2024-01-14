"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

type DataCardProps = {
  title: string;
  subtitle: string;
  picUrl?: string;
  period: string;
  children?: React.ReactNode;
};

const DataCard = ({ title, subtitle, period, picUrl }: DataCardProps) => {
  return (
    <div className="my-5 flex items-center space-x-6">
      <Avatar className="h-14 w-14 rounded-full border-2">
        <AvatarImage src={picUrl} alt="ntu" />
        <AvatarFallback className="bg-black text-white dark:bg-white dark:text-black">{`${title[0]}`}</AvatarFallback>
      </Avatar>
      <div>
        <p className="flex items-center text-lg font-semibold">{title}</p>
        <p className="text-md text-gray-700 dark:text-gray-300">{subtitle}</p>
        <Badge
          variant="outline"
          className="-ml-1 mt-1 border-gray-600 font-normal dark:bg-slate-900 dark:text-white"
        >
          {period}
        </Badge>
      </div>
    </div>
  );
};

export default DataCard;
