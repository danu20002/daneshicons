import React from 'react';

export const iconData = {
  "id": "MarmoSpace",
  "name": "MarmoSpace",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 2.53 L 14.33 8.31 L 21.47 9.87 L 15.69 14.33 L 14.13 21.47 L 9.67 15.69 L 2.53 14.13 L 8.31 9.67 Z"
      }
    ]
  ]
};

export const MarmoSpace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 2.53 L 14.33 8.31 L 21.47 9.87 L 15.69 14.33 L 14.13 21.47 L 9.67 15.69 L 2.53 14.13 L 8.31 9.67 Z" />
      {children}
    </svg>
  );
});

export default MarmoSpace;
