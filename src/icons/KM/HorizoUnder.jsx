import React from 'react';

export const iconData = {
  "id": "HorizoUnder",
  "name": "HorizoUnder",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 10.41 8.43 8.31 Q 11.57 9.24 14.71 10.17 Q 14.77 13.60 14.84 17.04 Q 12.43 14.86 10.01 12.69 Q 8.64 12.60 7.28 12.52 Z"
      }
    ]
  ]
};

export const HorizoUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 10.41 8.43 8.31 Q 11.57 9.24 14.71 10.17 Q 14.77 13.60 14.84 17.04 Q 12.43 14.86 10.01 12.69 Q 8.64 12.60 7.28 12.52 Z" />
      {children}
    </svg>
  );
});

export default HorizoUnder;
