import React from 'react';

export const iconData = {
  "id": "DuctoHint",
  "name": "DuctoHint",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.17 3.36 L 20.07 8.70 L 18.89 17.33 L 10.83 20.64 L 3.93 15.30 L 5.11 6.67 Z"
      }
    ]
  ]
};

export const DuctoHint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.17 3.36 L 20.07 8.70 L 18.89 17.33 L 10.83 20.64 L 3.93 15.30 L 5.11 6.67 Z" />
      {children}
    </svg>
  );
});

export default DuctoHint;
