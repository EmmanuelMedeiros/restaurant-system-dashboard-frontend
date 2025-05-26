import type React from "react";
import "./styles.scss";

const MCard: React.FC<{
  children: any;
  mainCard?: boolean;
  cardTitle?: string;
  className?: any;
}> = ({ children, mainCard = false, cardTitle, className }: any) => {
  return (
    <div
      className={`p-5 bg-[#2d2d2d] rounded-xl min-w-[10rem] ${className} 
        ${mainCard && "w-[95vw] mx-auto my-1 min-h-[100vh]"}`
      }
    >
      {cardTitle && <p>{cardTitle}</p>}
      {children}
    </div>
  );
};

export default MCard;
