import React from 'react';

export const iconData = {
  "id": "TorsioTent",
  "name": "TorsioTent",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 10.34 4.60 8.31 Q 4.29 6.38 3.98 4.45 Q 6.66 4.87 9.34 5.28 Q 12.10 7.16 14.86 9.05 Q 14.20 14.65 13.54 20.26 Q 10.84 19.52 8.14 18.78 Q 8.77 16.72 9.40 14.65 Q 9.71 13.51 10.01 12.38 Z"
      }
    ]
  ]
};

export const TorsioTent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 10.34 4.60 8.31 Q 4.29 6.38 3.98 4.45 Q 6.66 4.87 9.34 5.28 Q 12.10 7.16 14.86 9.05 Q 14.20 14.65 13.54 20.26 Q 10.84 19.52 8.14 18.78 Q 8.77 16.72 9.40 14.65 Q 9.71 13.51 10.01 12.38 Z" />
      {children}
    </svg>
  );
});

export default TorsioTent;
