import React from 'react';

export const iconData = {
  "id": "TorchioEnemy",
  "name": "TorchioEnemy",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.75 9.34 19.63 4.11 Q 20.22 9.69 20.80 15.28 Q 20.43 15.97 20.07 16.65 Q 17.27 15.24 14.46 13.82 Q 16.20 16.91 17.93 19.99 Q 11.72 18.93 5.50 17.87 Q 6.68 16.22 7.86 14.58 Z"
      }
    ]
  ]
};

export const TorchioEnemy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.75 9.34 19.63 4.11 Q 20.22 9.69 20.80 15.28 Q 20.43 15.97 20.07 16.65 Q 17.27 15.24 14.46 13.82 Q 16.20 16.91 17.93 19.99 Q 11.72 18.93 5.50 17.87 Q 6.68 16.22 7.86 14.58 Z" />
      {children}
    </svg>
  );
});

export default TorchioEnemy;
