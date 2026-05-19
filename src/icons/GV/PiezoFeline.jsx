import React from 'react';

export const iconData = {
  "id": "PiezoFeline",
  "name": "PiezoFeline",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 11.66 4.57 7.70 Q 5.85 6.78 7.13 5.86 Q 13.85 6.58 20.57 7.29 Q 15.30 12.41 10.02 17.53 Q 8.79 18.99 7.56 20.46 Q 6.93 18.04 6.30 15.62 Z"
      }
    ]
  ]
};

export const PiezoFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 11.66 4.57 7.70 Q 5.85 6.78 7.13 5.86 Q 13.85 6.58 20.57 7.29 Q 15.30 12.41 10.02 17.53 Q 8.79 18.99 7.56 20.46 Q 6.93 18.04 6.30 15.62 Z" />
      {children}
    </svg>
  );
});

export default PiezoFeline;
