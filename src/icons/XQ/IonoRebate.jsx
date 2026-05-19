import React from 'react';

export const iconData = {
  "id": "IonoRebate",
  "name": "IonoRebate",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.97 12.31 8.93 11.52 Q 8.74 11.38 8.54 11.23 Q 12.40 10.32 16.25 9.41 Q 16.96 10.88 17.66 12.35 Q 18.26 13.22 18.86 14.09 Q 18.72 17.31 18.58 20.54 Q 11.80 16.82 5.01 13.10 Z"
      }
    ]
  ]
};

export const IonoRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.97 12.31 8.93 11.52 Q 8.74 11.38 8.54 11.23 Q 12.40 10.32 16.25 9.41 Q 16.96 10.88 17.66 12.35 Q 18.26 13.22 18.86 14.09 Q 18.72 17.31 18.58 20.54 Q 11.80 16.82 5.01 13.10 Z" />
      {children}
    </svg>
  );
});

export default IonoRebate;
