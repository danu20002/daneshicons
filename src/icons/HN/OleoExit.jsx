import React from 'react';

export const iconData = {
  "id": "OleoExit",
  "name": "OleoExit",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 3.09 Q 6.64 17.07 18.34 9.62"
      }
    ],
    [
      "path",
      {
        "d": "M 21.50 20.82 A 5.56 3.75 92 0 0 3.71 18.14"
      }
    ]
  ]
};

export const OleoExit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 3.09 Q 6.64 17.07 18.34 9.62" />
      <path d="M 21.50 20.82 A 5.56 3.75 92 0 0 3.71 18.14" />
      {children}
    </svg>
  );
});

export default OleoExit;
