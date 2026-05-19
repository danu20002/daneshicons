import React from 'react';

export const iconData = {
  "id": "YeastQualify",
  "name": "YeastQualify",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.89 0 a 2.45 2.45 0 1 0 -4.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 12.00 a 6.40 6.40 0 1 0 12.79 0 a 6.40 6.40 0 1 0 -12.79 0"
      }
    ]
  ]
};

export const YeastQualify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.89 0 a 2.45 2.45 0 1 0 -4.89 0" />
      <path d="M 5.60 12.00 a 6.40 6.40 0 1 0 12.79 0 a 6.40 6.40 0 1 0 -12.79 0" />
      {children}
    </svg>
  );
});

export default YeastQualify;
