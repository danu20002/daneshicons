import React from 'react';

export const iconData = {
  id: "Navigation",
  name: "Navigation",
  category: "N",
  nodes: [["polygon",{"points":"3 11 22 2 13 21 11 13 3 11"}]]
};

export const Navigation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
      {children}
    </svg>
  );
});

export default Navigation;
