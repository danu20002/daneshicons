import React from 'react';

export const iconData = {
  "id": "ConsoVague",
  "name": "ConsoVague",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 22.31 L 8.98 16.51 L 3.03 17.28 L 6.60 12.45 L 2.28 8.28 L 8.28 8.06 L 8.85 2.08 L 12.76 6.63 L 17.79 3.35 L 16.67 9.25 L 22.37 11.13 L 17.06 13.94 L 19.15 19.57 L 13.64 17.17 Z"
      }
    ]
  ]
};

export const ConsoVague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 22.31 L 8.98 16.51 L 3.03 17.28 L 6.60 12.45 L 2.28 8.28 L 8.28 8.06 L 8.85 2.08 L 12.76 6.63 L 17.79 3.35 L 16.67 9.25 L 22.37 11.13 L 17.06 13.94 L 19.15 19.57 L 13.64 17.17 Z" />
      {children}
    </svg>
  );
});

export default ConsoVague;
