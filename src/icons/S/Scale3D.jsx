import React from 'react';

export const iconData = {
  id: "Scale3d",
  name: "Scale3d",
  category: "S",
  nodes: [["path",{"d":"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{"d":"M5.293 18.707 11 13"}],["circle",{"cx":"19","cy":"19","r":"2"}],["circle",{"cx":"5","cy":"5","r":"2"}]]
};

export const Scale3d = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
      <path d="M5.293 18.707 11 13" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      {children}
    </svg>
  );
});

export default Scale3d;
