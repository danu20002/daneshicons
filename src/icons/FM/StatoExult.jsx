import React from 'react';

export const iconData = {
  "id": "StatoExult",
  "name": "StatoExult",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 9.44 0 1 0 18.88 0 a 9.44 9.44 0 1 0 -18.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 7.28 a 8.18 2.452765159821499 0 1 0 16.35 0 a 8.18 2.452765159821499 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 2.8322092505637557 0 1 0 18.88 0 a 9.44 2.8322092505637557 0 1 0 -18.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 16.72 a 8.18 2.452765159821499 0 1 0 16.35 0 a 8.18 2.452765159821499 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 0 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 1 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 0 12.00 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 1 12.00 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 0 5.32 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 1 5.32 18.68"
      }
    ]
  ]
};

export const StatoExult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.56 12.00 a 9.44 9.44 0 1 0 18.88 0 a 9.44 9.44 0 1 0 -18.88 0" />
      <path d="M 3.82 7.28 a 8.18 2.452765159821499 0 1 0 16.35 0 a 8.18 2.452765159821499 0 1 0 -16.35 0" />
      <path d="M 2.56 12.00 a 9.44 2.8322092505637557 0 1 0 18.88 0 a 9.44 2.8322092505637557 0 1 0 -18.88 0" />
      <path d="M 3.82 16.72 a 8.18 2.452765159821499 0 1 0 16.35 0 a 8.18 2.452765159821499 0 1 0 -16.35 0" />
      <path d="M 18.68 5.32 A 2 2 0 0 0 18.68 18.68" />
      <path d="M 18.68 5.32 A 2 2 0 0 1 18.68 18.68" />
      <path d="M 12.00 2.56 A 2 2 0 0 0 12.00 21.44" />
      <path d="M 12.00 2.56 A 2 2 0 0 1 12.00 21.44" />
      <path d="M 5.32 5.32 A 2 2 0 0 0 5.32 18.68" />
      <path d="M 5.32 5.32 A 2 2 0 0 1 5.32 18.68" />
      {children}
    </svg>
  );
});

export default StatoExult;
