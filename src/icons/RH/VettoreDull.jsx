import React from 'react';

export const iconData = {
  "id": "VettoreDull",
  "name": "VettoreDull",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.51 11.28 L 18.50 18.99 L 10.59 21.44 L 3.74 16.78 L 3.11 8.52 L 9.18 2.89 L 17.37 4.11 Z"
      }
    ]
  ]
};

export const VettoreDull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.51 11.28 L 18.50 18.99 L 10.59 21.44 L 3.74 16.78 L 3.11 8.52 L 9.18 2.89 L 17.37 4.11 Z" />
      {children}
    </svg>
  );
});

export default VettoreDull;
