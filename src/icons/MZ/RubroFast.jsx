import React from 'react';

export const iconData = {
  "id": "RubroFast",
  "name": "RubroFast",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.25 20.05 L 3.81 12.82 L 8.69 4.46 L 18.15 6.52 L 19.11 16.15 Z"
      }
    ]
  ]
};

export const RubroFast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.25 20.05 L 3.81 12.82 L 8.69 4.46 L 18.15 6.52 L 19.11 16.15 Z" />
      {children}
    </svg>
  );
});

export default RubroFast;
