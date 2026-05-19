import React from 'react';

export const iconData = {
  "id": "TirsoXerox",
  "name": "TirsoXerox",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 12.00 a 9.94 9.94 0 1 0 19.88 0 a 9.94 9.94 0 1 0 -19.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.06 12.00 a 9.94 2.982422932097688 0 1 0 19.88 0 a 9.94 2.982422932097688 0 1 0 -19.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 4.97 A 2 2 0 0 0 19.03 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 4.97 A 2 2 0 0 1 19.03 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.06 A 2 2 0 0 0 12.00 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.06 A 2 2 0 0 1 12.00 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 4.97 A 2 2 0 0 0 4.97 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 4.97 A 2 2 0 0 1 4.97 19.03"
      }
    ]
  ]
};

export const TirsoXerox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 12.00 a 9.94 9.94 0 1 0 19.88 0 a 9.94 9.94 0 1 0 -19.88 0" />
      <path d="M 2.06 12.00 a 9.94 2.982422932097688 0 1 0 19.88 0 a 9.94 2.982422932097688 0 1 0 -19.88 0" />
      <path d="M 19.03 4.97 A 2 2 0 0 0 19.03 19.03" />
      <path d="M 19.03 4.97 A 2 2 0 0 1 19.03 19.03" />
      <path d="M 12.00 2.06 A 2 2 0 0 0 12.00 21.94" />
      <path d="M 12.00 2.06 A 2 2 0 0 1 12.00 21.94" />
      <path d="M 4.97 4.97 A 2 2 0 0 0 4.97 19.03" />
      <path d="M 4.97 4.97 A 2 2 0 0 1 4.97 19.03" />
      {children}
    </svg>
  );
});

export default TirsoXerox;
