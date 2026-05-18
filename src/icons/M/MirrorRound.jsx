import React from 'react';

export const iconData = {
  id: "MirrorRound",
  name: "MirrorRound",
  category: "M",
  nodes: [["path",{"d":"M10 6.6 8.6 8"}],["path",{"d":"M12 18v4"}],["path",{"d":"M15 7.5 9.5 13"}],["path",{"d":"M7 22h10"}],["circle",{"cx":"12","cy":"10","r":"8"}]]
};

export const MirrorRound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M10 6.6 8.6 8" />
      <path d="M12 18v4" />
      <path d="M15 7.5 9.5 13" />
      <path d="M7 22h10" />
      <circle cx="12" cy="10" r="8" />
      {children}
    </svg>
  );
});

export default MirrorRound;
