import React from 'react';

export const iconData = {
  "id": "HelioRazor",
  "name": "HelioRazor",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 11.45 Q 20.72 19.97 9.21 11.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.99 6.07 Q 16.73 12.91 10.87 21.40"
      }
    ]
  ]
};

export const HelioRazor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 11.45 Q 20.72 19.97 9.21 11.28" />
      <path d="M 18.99 6.07 Q 16.73 12.91 10.87 21.40" />
      {children}
    </svg>
  );
});

export default HelioRazor;
