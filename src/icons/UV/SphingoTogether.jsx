import React from 'react';

export const iconData = {
  "id": "SphingoTogether",
  "name": "SphingoTogether",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 2.4092829891946166 0 1 0 16.06 0 a 8.03 2.4092829891946166 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.04 A 2 2 0 0 0 16.02 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.04 A 2 2 0 0 1 16.02 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.04 A 2 2 0 0 0 7.98 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.04 A 2 2 0 0 1 7.98 18.96"
      }
    ]
  ]
};

export const SphingoTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0" />
      <path d="M 3.97 12.00 a 8.03 2.4092829891946166 0 1 0 16.06 0 a 8.03 2.4092829891946166 0 1 0 -16.06 0" />
      <path d="M 16.02 5.04 A 2 2 0 0 0 16.02 18.96" />
      <path d="M 16.02 5.04 A 2 2 0 0 1 16.02 18.96" />
      <path d="M 7.98 5.04 A 2 2 0 0 0 7.98 18.96" />
      <path d="M 7.98 5.04 A 2 2 0 0 1 7.98 18.96" />
      {children}
    </svg>
  );
});

export default SphingoTogether;
