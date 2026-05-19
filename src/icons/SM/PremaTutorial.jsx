import React from 'react';

export const iconData = {
  "id": "PremaTutorial",
  "name": "PremaTutorial",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.82 16.98 L 3.15 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.27 8.32 Q 21.46 20.56 14.15 20.56"
      }
    ]
  ]
};

export const PremaTutorial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.82 16.98 L 3.15 18.68" />
      <path d="M 10.27 8.32 Q 21.46 20.56 14.15 20.56" />
      {children}
    </svg>
  );
});

export default PremaTutorial;
