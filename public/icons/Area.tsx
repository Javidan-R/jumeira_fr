import React from "react";

export const Area = ({ color }: { color: string }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 34H5.55556C4.61256 34 3.70819 33.6254 3.0414 32.9586C2.3746 32.2918 2 31.3874 2 30.4444V5.55556C2 4.61256 2.3746 3.70819 3.0414 3.0414C3.70819 2.3746 4.61256 2 5.55556 2H30.4444C31.3874 2 32.2918 2.3746 32.9586 3.0414C33.6254 3.70819 34 4.61256 34 5.55556V30.4444C34 31.3874 33.6254 32.2918 32.9586 32.9586C32.2918 33.6254 31.3874 34 30.4444 34H21.5556M12.6667 2V14.4444M34 14.4444H21.5556M2 23.3333H18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
