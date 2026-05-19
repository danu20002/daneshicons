import React from 'react';

export const iconData = {
  "id": "TurbinoRasp",
  "name": "TurbinoRasp",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 13.05 3.69 11.73 Q 4.66 10.60 5.63 9.47 Q 10.78 7.31 15.92 5.14 Q 15.51 7.94 15.09 10.75 Q 17.64 14.33 20.18 17.91 Q 17.42 16.04 14.66 14.16 Q 15.79 16.32 16.92 18.49 Q 14.46 16.42 12.01 14.36 Z"
      }
    ]
  ]
};

export const TurbinoRasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 13.05 3.69 11.73 Q 4.66 10.60 5.63 9.47 Q 10.78 7.31 15.92 5.14 Q 15.51 7.94 15.09 10.75 Q 17.64 14.33 20.18 17.91 Q 17.42 16.04 14.66 14.16 Q 15.79 16.32 16.92 18.49 Q 14.46 16.42 12.01 14.36 Z" />
      {children}
    </svg>
  );
});

export default TurbinoRasp;
