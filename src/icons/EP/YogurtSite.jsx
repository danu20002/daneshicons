import React from 'react';

export const iconData = {
  "id": "YogurtSite",
  "name": "YogurtSite",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.80 2.54 C 20.62 2.54, 3.29 6.15, 10.31 6.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 9.76 Q 19.29 4.14 9.85 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 14.42 A 4.92 3.67 174 0 1 15.73 4.53"
      }
    ]
  ]
};

export const YogurtSite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.80 2.54 C 20.62 2.54, 3.29 6.15, 10.31 6.28" />
      <path d="M 5.59 9.76 Q 19.29 4.14 9.85 5.89" />
      <path d="M 11.59 14.42 A 4.92 3.67 174 0 1 15.73 4.53" />
      {children}
    </svg>
  );
});

export default YogurtSite;
