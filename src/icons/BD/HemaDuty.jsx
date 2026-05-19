import React from 'react';

export const iconData = {
  "id": "HemaDuty",
  "name": "HemaDuty",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 5.54 L 20.73 5.54 L 20.73 18.46 L 3.27 18.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 5.54 L 7.28 1.53 L 24.74 1.53 L 20.73 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 5.54 L 24.74 1.53 L 24.74 14.45 L 20.73 18.46"
      }
    ]
  ]
};

export const HemaDuty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 5.54 L 20.73 5.54 L 20.73 18.46 L 3.27 18.46 Z" />
      <path d="M 3.27 5.54 L 7.28 1.53 L 24.74 1.53 L 20.73 5.54" />
      <path d="M 20.73 5.54 L 24.74 1.53 L 24.74 14.45 L 20.73 18.46" />
      {children}
    </svg>
  );
});

export default HemaDuty;
