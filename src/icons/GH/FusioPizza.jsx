import React from 'react';

export const iconData = {
  "id": "FusioPizza",
  "name": "FusioPizza",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 1 12.65 0 a 6.33 6.33 0 1 1 -12.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.68 12.00 L 21.68 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.43 17.43 L 18.84 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.68 L 12.00 21.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 17.43 L 5.16 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 12.00 L 2.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 6.57 L 5.16 5.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.32 L 12.00 2.32"
      }
    ],
    [
      "path",
      {
        "d": "M 17.43 6.57 L 18.84 5.16"
      }
    ]
  ]
};

export const FusioPizza = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 1 12.65 0 a 6.33 6.33 0 1 1 -12.65 0" />
      <path d="M 19.68 12.00 L 21.68 12.00" />
      <path d="M 17.43 17.43 L 18.84 18.84" />
      <path d="M 12.00 19.68 L 12.00 21.68" />
      <path d="M 6.57 17.43 L 5.16 18.84" />
      <path d="M 4.32 12.00 L 2.32 12.00" />
      <path d="M 6.57 6.57 L 5.16 5.16" />
      <path d="M 12.00 4.32 L 12.00 2.32" />
      <path d="M 17.43 6.57 L 18.84 5.16" />
      {children}
    </svg>
  );
});

export default FusioPizza;
