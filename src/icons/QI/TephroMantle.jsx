import React from 'react';

export const iconData = {
  "id": "TephroMantle",
  "name": "TephroMantle",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.93 13.97 9.93 10.74 Q 11.52 8.61 13.11 6.47 Q 15.19 5.52 17.27 4.56 Q 15.82 11.71 14.36 18.85 Q 9.15 18.02 3.93 17.20 Z"
      }
    ]
  ]
};

export const TephroMantle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.93 13.97 9.93 10.74 Q 11.52 8.61 13.11 6.47 Q 15.19 5.52 17.27 4.56 Q 15.82 11.71 14.36 18.85 Q 9.15 18.02 3.93 17.20 Z" />
      {children}
    </svg>
  );
});

export default TephroMantle;
