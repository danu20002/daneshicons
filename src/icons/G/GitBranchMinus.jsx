import React from 'react';

export const iconData = {
  id: "GitBranchMinus",
  name: "GitBranchMinus",
  category: "G",
  nodes: [["path",{"d":"M15 6a9 9 0 0 0-9 9V3"}],["path",{"d":"M21 18h-6"}],["circle",{"cx":"18","cy":"6","r":"3"}],["circle",{"cx":"6","cy":"18","r":"3"}]]
};

export const GitBranchMinus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <path d="M21 18h-6" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      {children}
    </svg>
  );
});

export default GitBranchMinus;
