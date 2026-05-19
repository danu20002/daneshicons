import React from 'react';

export const iconData = {
  "id": "StatoPoint",
  "name": "StatoPoint",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.56 15.82 6.14 10.80 Q 8.77 10.98 11.40 11.16 Q 11.01 8.28 10.62 5.40 Q 14.99 5.40 19.35 5.40 Q 17.32 9.46 15.29 13.51 Q 14.68 15.91 14.06 18.31 Q 11.52 18.14 8.99 17.97 Q 7.98 19.40 6.98 20.84 Z"
      }
    ]
  ]
};

export const StatoPoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.56 15.82 6.14 10.80 Q 8.77 10.98 11.40 11.16 Q 11.01 8.28 10.62 5.40 Q 14.99 5.40 19.35 5.40 Q 17.32 9.46 15.29 13.51 Q 14.68 15.91 14.06 18.31 Q 11.52 18.14 8.99 17.97 Q 7.98 19.40 6.98 20.84 Z" />
      {children}
    </svg>
  );
});

export default StatoPoint;
