import React from 'react';

export const iconData = {
  "id": "RhyoTrain",
  "name": "RhyoTrain",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.89 8.07 L 20.36 14.80 L 15.93 19.89 L 9.20 20.36 L 4.11 15.93 L 3.64 9.20 L 8.07 4.11 L 14.80 3.64 Z"
      }
    ]
  ]
};

export const RhyoTrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.89 8.07 L 20.36 14.80 L 15.93 19.89 L 9.20 20.36 L 4.11 15.93 L 3.64 9.20 L 8.07 4.11 L 14.80 3.64 Z" />
      {children}
    </svg>
  );
});

export default RhyoTrain;
