import React from 'react';

export const iconData = {
  "id": "VentriloProtein",
  "name": "VentriloProtein",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.17 3.83 L 10.75 8.01 L 12.95 1.39 L 13.94 8.30 L 20.17 5.17 L 15.99 10.75 L 22.61 12.95 L 15.70 13.94 L 18.83 20.17 L 13.25 15.99 L 11.05 22.61 L 10.06 15.70 L 3.83 18.83 L 8.01 13.25 L 1.39 11.05 L 8.30 10.06 Z"
      }
    ]
  ]
};

export const VentriloProtein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.17 3.83 L 10.75 8.01 L 12.95 1.39 L 13.94 8.30 L 20.17 5.17 L 15.99 10.75 L 22.61 12.95 L 15.70 13.94 L 18.83 20.17 L 13.25 15.99 L 11.05 22.61 L 10.06 15.70 L 3.83 18.83 L 8.01 13.25 L 1.39 11.05 L 8.30 10.06 Z" />
      {children}
    </svg>
  );
});

export default VentriloProtein;
