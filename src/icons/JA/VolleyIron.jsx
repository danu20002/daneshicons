import React from 'react';

export const iconData = {
  "id": "VolleyIron",
  "name": "VolleyIron",
  "category": "JA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.95 10.55 6.38 8.58 Q 5.37 7.75 4.37 6.92 Q 4.82 7.12 5.27 7.32 Q 11.60 7.38 17.93 7.45 Q 17.40 10.78 16.86 14.10 Q 14.20 13.31 11.53 12.51 Z"
      }
    ]
  ]
};

export const VolleyIron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.95 10.55 6.38 8.58 Q 5.37 7.75 4.37 6.92 Q 4.82 7.12 5.27 7.32 Q 11.60 7.38 17.93 7.45 Q 17.40 10.78 16.86 14.10 Q 14.20 13.31 11.53 12.51 Z" />
      {children}
    </svg>
  );
});

export default VolleyIron;
