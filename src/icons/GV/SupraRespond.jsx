import React from 'react';

export const iconData = {
  "id": "SupraRespond",
  "name": "SupraRespond",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.96 13.74 L 6.02 18.89 L 9.03 3.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 13.91 L 7.29 16.33 L 10.61 5.76 Z"
      }
    ]
  ]
};

export const SupraRespond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.96 13.74 L 6.02 18.89 L 9.03 3.37 Z" />
      <path d="M 18.10 13.91 L 7.29 16.33 L 10.61 5.76 Z" />
      {children}
    </svg>
  );
});

export default SupraRespond;
