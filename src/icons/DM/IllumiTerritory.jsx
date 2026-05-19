import React from 'react';

export const iconData = {
  "id": "IllumiTerritory",
  "name": "IllumiTerritory",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.12 16.44 L 3.87 10.98 L 6.43 6.00 L 11.59 3.82 L 16.95 5.47 L 19.99 10.18 L 19.29 15.74 L 15.18 19.55 L 9.59 19.83 Z"
      }
    ]
  ]
};

export const IllumiTerritory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.12 16.44 L 3.87 10.98 L 6.43 6.00 L 11.59 3.82 L 16.95 5.47 L 19.99 10.18 L 19.29 15.74 L 15.18 19.55 L 9.59 19.83 Z" />
      {children}
    </svg>
  );
});

export default IllumiTerritory;
