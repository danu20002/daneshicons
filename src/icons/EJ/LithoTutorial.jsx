import React from 'react';

export const iconData = {
  "id": "LithoTutorial",
  "name": "LithoTutorial",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 12.00 a 6.04 6.04 0 1 0 12.08 0 a 6.04 6.04 0 1 0 -12.08 0"
      }
    ]
  ]
};

export const LithoTutorial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0" />
      <path d="M 5.96 12.00 a 6.04 6.04 0 1 0 12.08 0 a 6.04 6.04 0 1 0 -12.08 0" />
      {children}
    </svg>
  );
});

export default LithoTutorial;
