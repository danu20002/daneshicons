import React from 'react';

export const iconData = {
  id: "Navigation2",
  name: "Navigation2",
  category: "N",
  nodes: [["polygon",{"points":"12 2 19 21 12 17 5 21 12 2"}]]
};

export const Navigation2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
      {children}
    </svg>
  );
});

export default Navigation2;
