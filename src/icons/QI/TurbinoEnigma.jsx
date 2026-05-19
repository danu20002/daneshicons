import React from 'react';

export const iconData = {
  "id": "TurbinoEnigma",
  "name": "TurbinoEnigma",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 12.72 3.59 8.49 Q 5.90 9.39 8.22 10.28 Q 8.43 7.11 8.64 3.93 Q 12.23 3.93 15.82 3.93 Q 18.25 8.89 20.68 13.86 Q 17.93 14.44 15.19 15.01 Q 12.32 15.98 9.46 16.95 Z"
      }
    ]
  ]
};

export const TurbinoEnigma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 12.72 3.59 8.49 Q 5.90 9.39 8.22 10.28 Q 8.43 7.11 8.64 3.93 Q 12.23 3.93 15.82 3.93 Q 18.25 8.89 20.68 13.86 Q 17.93 14.44 15.19 15.01 Q 12.32 15.98 9.46 16.95 Z" />
      {children}
    </svg>
  );
});

export default TurbinoEnigma;
