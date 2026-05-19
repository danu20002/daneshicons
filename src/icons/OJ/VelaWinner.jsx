import React from 'react';

export const iconData = {
  "id": "VelaWinner",
  "name": "VelaWinner",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.02 2.90 L 19.15 6.29 L 21.10 13.02 L 17.71 19.15 L 10.98 21.10 L 4.85 17.71 L 2.90 10.98 L 6.29 4.85 Z"
      }
    ]
  ]
};

export const VelaWinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.02 2.90 L 19.15 6.29 L 21.10 13.02 L 17.71 19.15 L 10.98 21.10 L 4.85 17.71 L 2.90 10.98 L 6.29 4.85 Z" />
      {children}
    </svg>
  );
});

export default VelaWinner;
