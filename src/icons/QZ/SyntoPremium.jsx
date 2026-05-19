import React from 'react';

export const iconData = {
  "id": "SyntoPremium",
  "name": "SyntoPremium",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.17 6.32 L 12.17 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 6.60 L 17.46 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M 18.44 14.35 L 15.21 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 11.76 18.85 L 8.52 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 13.89 L 6.65 10.08"
      }
    ]
  ]
};

export const SyntoPremium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.17 6.32 L 12.17 6.32" />
      <path d="M 16.22 6.60 L 17.46 10.40" />
      <path d="M 18.44 14.35 L 15.21 16.70" />
      <path d="M 11.76 18.85 L 8.52 16.50" />
      <path d="M 5.41 13.89 L 6.65 10.08" />
      {children}
    </svg>
  );
});

export default SyntoPremium;
