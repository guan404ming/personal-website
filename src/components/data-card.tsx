"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

type DataCardProps = {
  title: string;
  subtitle: string;
  period: string;
  children?: React.ReactNode;
};

const DataCard = ({ title, subtitle, period }: DataCardProps) => {
  return (
    <div className="my-4 flex items-center space-x-6">
      <Avatar className="h-14 w-14">
        <AvatarImage src="ntu.png" alt="ntu" />
        <AvatarFallback>GM</AvatarFallback>
      </Avatar>
      <div>
        <p className="flex items-center text-2xl font-semibold">{title}</p>
        <p className="text-md text-gray-300">{subtitle}</p>
        <Badge variant="outline" className="-ml-1 mt-1 bg-slate-900 font-light">
          {period}
        </Badge>
      </div>
    </div>
  );
};

export default DataCard;
