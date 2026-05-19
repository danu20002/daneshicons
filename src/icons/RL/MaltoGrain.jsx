import React from 'react';

export const iconData = {
  "id": "MaltoGrain",
  "name": "MaltoGrain",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 14.78 L 6.41 10.03 L 6.47 3.97 L 12.15 6.07 L 17.93 4.26 L 17.68 10.31 L 21.19 15.24 L 15.36 16.88 L 11.76 21.75 L 8.40 16.71 Z"
      }
    ]
  ]
};

export const MaltoGrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 14.78 L 6.41 10.03 L 6.47 3.97 L 12.15 6.07 L 17.93 4.26 L 17.68 10.31 L 21.19 15.24 L 15.36 16.88 L 11.76 21.75 L 8.40 16.71 Z" />
      {children}
    </svg>
  );
});

export default MaltoGrain;
