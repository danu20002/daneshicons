import React from 'react';

export const iconData = {
  "id": "VivandeThresh",
  "name": "VivandeThresh",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 8.84 0 1 0 17.69 0 a 8.84 8.84 0 1 0 -17.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 7.58 a 7.66 2.297481306592217 0 1 0 15.32 0 a 7.66 2.297481306592217 0 1 0 -15.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 2.6529029016382992 0 1 0 17.69 0 a 8.84 2.6529029016382992 0 1 0 -17.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 16.42 a 7.66 2.297481306592217 0 1 0 15.32 0 a 7.66 2.297481306592217 0 1 0 -15.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.42 4.34 A 2 2 0 0 0 16.42 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 16.42 4.34 A 2 2 0 0 1 16.42 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 4.34 A 2 2 0 0 0 7.58 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 4.34 A 2 2 0 0 1 7.58 19.66"
      }
    ]
  ]
};

export const VivandeThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 12.00 a 8.84 8.84 0 1 0 17.69 0 a 8.84 8.84 0 1 0 -17.69 0" />
      <path d="M 4.34 7.58 a 7.66 2.297481306592217 0 1 0 15.32 0 a 7.66 2.297481306592217 0 1 0 -15.32 0" />
      <path d="M 3.16 12.00 a 8.84 2.6529029016382992 0 1 0 17.69 0 a 8.84 2.6529029016382992 0 1 0 -17.69 0" />
      <path d="M 4.34 16.42 a 7.66 2.297481306592217 0 1 0 15.32 0 a 7.66 2.297481306592217 0 1 0 -15.32 0" />
      <path d="M 16.42 4.34 A 2 2 0 0 0 16.42 19.66" />
      <path d="M 16.42 4.34 A 2 2 0 0 1 16.42 19.66" />
      <path d="M 7.58 4.34 A 2 2 0 0 0 7.58 19.66" />
      <path d="M 7.58 4.34 A 2 2 0 0 1 7.58 19.66" />
      {children}
    </svg>
  );
});

export default VivandeThresh;
