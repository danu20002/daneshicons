import React from 'react';

export const iconData = {
  "id": "TrinitroSignal",
  "name": "TrinitroSignal",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.90 14.71 L 15.33 16.41 L 12.17 21.31 L 8.83 16.53 L 3.20 15.04 L 6.71 10.39 L 6.39 4.57 L 11.90 6.47 L 17.33 4.37 L 17.22 10.20 Z"
      }
    ]
  ]
};

export const TrinitroSignal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.90 14.71 L 15.33 16.41 L 12.17 21.31 L 8.83 16.53 L 3.20 15.04 L 6.71 10.39 L 6.39 4.57 L 11.90 6.47 L 17.33 4.37 L 17.22 10.20 Z" />
      {children}
    </svg>
  );
});

export default TrinitroSignal;
