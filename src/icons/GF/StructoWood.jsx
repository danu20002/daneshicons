import React from 'react';

export const iconData = {
  "id": "StructoWood",
  "name": "StructoWood",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.45 12.00 a 9.55 9.55 0 1 0 19.11 0 a 9.55 9.55 0 1 0 -19.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 7.22 a 8.27 2.4823566379354176 0 1 0 16.55 0 a 8.27 2.4823566379354176 0 1 0 -16.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.45 12.00 a 9.55 2.8663785462733355 0 1 0 19.11 0 a 9.55 2.8663785462733355 0 1 0 -19.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 16.78 a 8.27 2.4823566379354176 0 1 0 16.55 0 a 8.27 2.4823566379354176 0 1 0 -16.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 5.24 A 2 2 0 0 0 18.76 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 5.24 A 2 2 0 0 1 18.76 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.45 A 2 2 0 0 0 12.00 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.45 A 2 2 0 0 1 12.00 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.24 5.24 A 2 2 0 0 0 5.24 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.24 5.24 A 2 2 0 0 1 5.24 18.76"
      }
    ]
  ]
};

export const StructoWood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.45 12.00 a 9.55 9.55 0 1 0 19.11 0 a 9.55 9.55 0 1 0 -19.11 0" />
      <path d="M 3.73 7.22 a 8.27 2.4823566379354176 0 1 0 16.55 0 a 8.27 2.4823566379354176 0 1 0 -16.55 0" />
      <path d="M 2.45 12.00 a 9.55 2.8663785462733355 0 1 0 19.11 0 a 9.55 2.8663785462733355 0 1 0 -19.11 0" />
      <path d="M 3.73 16.78 a 8.27 2.4823566379354176 0 1 0 16.55 0 a 8.27 2.4823566379354176 0 1 0 -16.55 0" />
      <path d="M 18.76 5.24 A 2 2 0 0 0 18.76 18.76" />
      <path d="M 18.76 5.24 A 2 2 0 0 1 18.76 18.76" />
      <path d="M 12.00 2.45 A 2 2 0 0 0 12.00 21.55" />
      <path d="M 12.00 2.45 A 2 2 0 0 1 12.00 21.55" />
      <path d="M 5.24 5.24 A 2 2 0 0 0 5.24 18.76" />
      <path d="M 5.24 5.24 A 2 2 0 0 1 5.24 18.76" />
      {children}
    </svg>
  );
});

export default StructoWood;
