import React from 'react';

export const iconData = {
  "id": "TaloWise",
  "name": "TaloWise",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 6.93 L 20.55 6.93 L 20.55 17.07 L 3.45 17.07 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 6.93 L 6.79 3.59 L 23.89 3.59 L 20.55 6.93"
      }
    ],
    [
      "path",
      {
        "d": "M 20.55 6.93 L 23.89 3.59 L 23.89 13.73 L 20.55 17.07"
      }
    ]
  ]
};

export const TaloWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 6.93 L 20.55 6.93 L 20.55 17.07 L 3.45 17.07 Z" />
      <path d="M 3.45 6.93 L 6.79 3.59 L 23.89 3.59 L 20.55 6.93" />
      <path d="M 20.55 6.93 L 23.89 3.59 L 23.89 13.73 L 20.55 17.07" />
      {children}
    </svg>
  );
});

export default TaloWise;
