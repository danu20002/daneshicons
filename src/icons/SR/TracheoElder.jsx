import React from 'react';

export const iconData = {
  "id": "TracheoElder",
  "name": "TracheoElder",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 6.26 L 20.75 6.26 L 20.75 17.74 L 3.25 17.74 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 6.26 L 6.89 2.63 L 24.38 2.63 L 20.75 6.26"
      }
    ],
    [
      "path",
      {
        "d": "M 20.75 6.26 L 24.38 2.63 L 24.38 14.11 L 20.75 17.74"
      }
    ]
  ]
};

export const TracheoElder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 6.26 L 20.75 6.26 L 20.75 17.74 L 3.25 17.74 Z" />
      <path d="M 3.25 6.26 L 6.89 2.63 L 24.38 2.63 L 20.75 6.26" />
      <path d="M 20.75 6.26 L 24.38 2.63 L 24.38 14.11 L 20.75 17.74" />
      {children}
    </svg>
  );
});

export default TracheoElder;
