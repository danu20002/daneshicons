import React from 'react';

export const iconData = {
  "id": "UrceoKelp",
  "name": "UrceoKelp",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 5.12 L 19.96 5.12 L 19.96 18.88 L 4.04 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 5.12 L 8.63 0.53 L 24.55 0.53 L 19.96 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 5.12 L 24.55 0.53 L 24.55 14.29 L 19.96 18.88"
      }
    ]
  ]
};

export const UrceoKelp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 5.12 L 19.96 5.12 L 19.96 18.88 L 4.04 18.88 Z" />
      <path d="M 4.04 5.12 L 8.63 0.53 L 24.55 0.53 L 19.96 5.12" />
      <path d="M 19.96 5.12 L 24.55 0.53 L 24.55 14.29 L 19.96 18.88" />
      {children}
    </svg>
  );
});

export default UrceoKelp;
