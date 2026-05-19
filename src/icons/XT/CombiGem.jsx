import React from 'react';

export const iconData = {
  "id": "CombiGem",
  "name": "CombiGem",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 7.64 a 7.55 2.2644836484107747 0 1 0 15.10 0 a 7.55 2.2644836484107747 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 2.6148004879709332 0 1 0 17.43 0 a 8.72 2.6148004879709332 0 1 0 -17.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 16.36 a 7.55 2.2644836484107747 0 1 0 15.10 0 a 7.55 2.2644836484107747 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 5.84 A 2 2 0 0 0 18.16 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 5.84 A 2 2 0 0 1 18.16 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.28 A 2 2 0 0 0 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.28 A 2 2 0 0 1 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 5.84 A 2 2 0 0 0 5.84 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 5.84 A 2 2 0 0 1 5.84 18.16"
      }
    ]
  ]
};

export const CombiGem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0" />
      <path d="M 4.45 7.64 a 7.55 2.2644836484107747 0 1 0 15.10 0 a 7.55 2.2644836484107747 0 1 0 -15.10 0" />
      <path d="M 3.28 12.00 a 8.72 2.6148004879709332 0 1 0 17.43 0 a 8.72 2.6148004879709332 0 1 0 -17.43 0" />
      <path d="M 4.45 16.36 a 7.55 2.2644836484107747 0 1 0 15.10 0 a 7.55 2.2644836484107747 0 1 0 -15.10 0" />
      <path d="M 18.16 5.84 A 2 2 0 0 0 18.16 18.16" />
      <path d="M 18.16 5.84 A 2 2 0 0 1 18.16 18.16" />
      <path d="M 12.00 3.28 A 2 2 0 0 0 12.00 20.72" />
      <path d="M 12.00 3.28 A 2 2 0 0 1 12.00 20.72" />
      <path d="M 5.84 5.84 A 2 2 0 0 0 5.84 18.16" />
      <path d="M 5.84 5.84 A 2 2 0 0 1 5.84 18.16" />
      {children}
    </svg>
  );
});

export default CombiGem;
