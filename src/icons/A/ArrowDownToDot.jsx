import React from 'react';

export const iconData = {
  id: "ArrowDownToDot",
  name: "ArrowDownToDot",
  category: "A",
  nodes: [["path",{"d":"M12 2v14"}],["path",{"d":"m19 9-7 7-7-7"}],["circle",{"cx":"12","cy":"21","r":"1"}]]
};

export const ArrowDownToDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 2v14" />
      <path d="m19 9-7 7-7-7" />
      <circle cx="12" cy="21" r="1" />
      {children}
    </svg>
  );
});

export default ArrowDownToDot;
