import React from 'react';

export const iconData = {
  "id": "TaccoRhapsody",
  "name": "TaccoRhapsody",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 6.35 L 20.99 6.35 L 20.99 17.65 L 3.01 17.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 6.35 L 7.19 2.18 L 25.16 2.18 L 20.99 6.35"
      }
    ],
    [
      "path",
      {
        "d": "M 20.99 6.35 L 25.16 2.18 L 25.16 13.47 L 20.99 17.65"
      }
    ]
  ]
};

export const TaccoRhapsody = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 6.35 L 20.99 6.35 L 20.99 17.65 L 3.01 17.65 Z" />
      <path d="M 3.01 6.35 L 7.19 2.18 L 25.16 2.18 L 20.99 6.35" />
      <path d="M 20.99 6.35 L 25.16 2.18 L 25.16 13.47 L 20.99 17.65" />
      {children}
    </svg>
  );
});

export default TaccoRhapsody;
