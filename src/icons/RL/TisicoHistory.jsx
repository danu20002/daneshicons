import React from 'react';

export const iconData = {
  "id": "TisicoHistory",
  "name": "TisicoHistory",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.41 22.30 L 8.23 13.47 L 3.88 5.48 L 12.62 8.00 L 21.71 8.22 L 15.16 14.53 Z"
      }
    ]
  ]
};

export const TisicoHistory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.41 22.30 L 8.23 13.47 L 3.88 5.48 L 12.62 8.00 L 21.71 8.22 L 15.16 14.53 Z" />
      {children}
    </svg>
  );
});

export default TisicoHistory;
