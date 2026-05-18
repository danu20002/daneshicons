import React from 'react';

export const iconData = {
  id: "DatabaseSearch",
  name: "DatabaseSearch",
  category: "D",
  nodes: [["path",{"d":"M21 11.693V5"}],["path",{"d":"m22 22-1.875-1.875"}],["path",{"d":"M3 12a9 3 0 0 0 8.697 2.998"}],["path",{"d":"M3 5v14a9 3 0 0 0 9.28 2.999"}],["circle",{"cx":"18","cy":"18","r":"3"}],["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}]]
};

export const DatabaseSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M21 11.693V5" />
      <path d="m22 22-1.875-1.875" />
      <path d="M3 12a9 3 0 0 0 8.697 2.998" />
      <path d="M3 5v14a9 3 0 0 0 9.28 2.999" />
      <circle cx="18" cy="18" r="3" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      {children}
    </svg>
  );
});

export default DatabaseSearch;
