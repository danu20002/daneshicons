import React from 'react';

export const iconData = {
  id: "Birdhouse",
  name: "Birdhouse",
  category: "B",
  nodes: [["path",{"d":"M12 18v4"}],["path",{"d":"m17 18 1.956-11.468"}],["path",{"d":"m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8"}],["path",{"d":"M4 18h16"}],["path",{"d":"M7 18 5.044 6.532"}],["circle",{"cx":"12","cy":"10","r":"2"}]]
};

export const Birdhouse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 18v4" />
      <path d="m17 18 1.956-11.468" />
      <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
      <path d="M4 18h16" />
      <path d="M7 18 5.044 6.532" />
      <circle cx="12" cy="10" r="2" />
      {children}
    </svg>
  );
});

export default Birdhouse;
