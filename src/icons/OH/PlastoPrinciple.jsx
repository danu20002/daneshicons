import React from 'react';

export const iconData = {
  "id": "PlastoPrinciple",
  "name": "PlastoPrinciple",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 6.46 L 20.89 6.46 L 20.89 17.54 L 3.11 17.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 6.46 L 7.28 2.29 L 25.06 2.29 L 20.89 6.46"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 6.46 L 25.06 2.29 L 25.06 13.38 L 20.89 17.54"
      }
    ]
  ]
};

export const PlastoPrinciple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 6.46 L 20.89 6.46 L 20.89 17.54 L 3.11 17.54 Z" />
      <path d="M 3.11 6.46 L 7.28 2.29 L 25.06 2.29 L 20.89 6.46" />
      <path d="M 20.89 6.46 L 25.06 2.29 L 25.06 13.38 L 20.89 17.54" />
      {children}
    </svg>
  );
});

export default PlastoPrinciple;
