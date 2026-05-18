import React from 'react';

export const iconData = {
  id: "LineDotRightHorizontal",
  name: "LineDotRightHorizontal",
  category: "L",
  nodes: [["path",{"d":"M 3 12 L 15 12"}],["circle",{"cx":"18","cy":"12","r":"3"}]]
};

export const LineDotRightHorizontal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3 12 L 15 12" />
      <circle cx="18" cy="12" r="3" />
      {children}
    </svg>
  );
});

export default LineDotRightHorizontal;
