import React from 'react';

export const iconData = {
  "id": "PachyTrain",
  "name": "PachyTrain",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 6.22 L 15.27 3.38 L 21.21 12.45 L 14.42 20.90 L 4.28 17.05 Z"
      }
    ]
  ]
};

export const PachyTrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 6.22 L 15.27 3.38 L 21.21 12.45 L 14.42 20.90 L 4.28 17.05 Z" />
      {children}
    </svg>
  );
});

export default PachyTrain;
