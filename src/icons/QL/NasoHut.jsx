import React from 'react';

export const iconData = {
  "id": "NasoHut",
  "name": "NasoHut",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.35 0 a 8.67 8.67 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 6.80 a 6.94 2.0816199005395175 0 1 0 13.88 0 a 6.94 2.0816199005395175 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 10.27 a 8.50 2.5494532973724437 0 1 0 17.00 0 a 8.50 2.5494532973724437 0 1 0 -17.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 13.73 a 8.50 2.5494532973724437 0 1 0 17.00 0 a 8.50 2.5494532973724437 0 1 0 -17.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 17.20 a 6.94 2.081619900539517 0 1 0 13.88 0 a 6.94 2.081619900539517 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 4.49 A 2 2 0 0 0 16.34 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 4.49 A 2 2 0 0 1 16.34 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 4.49 A 2 2 0 0 0 7.66 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 4.49 A 2 2 0 0 1 7.66 19.51"
      }
    ]
  ]
};

export const NasoHut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.35 0 a 8.67 8.67 0 1 0 -17.35 0" />
      <path d="M 5.06 6.80 a 6.94 2.0816199005395175 0 1 0 13.88 0 a 6.94 2.0816199005395175 0 1 0 -13.88 0" />
      <path d="M 3.50 10.27 a 8.50 2.5494532973724437 0 1 0 17.00 0 a 8.50 2.5494532973724437 0 1 0 -17.00 0" />
      <path d="M 3.50 13.73 a 8.50 2.5494532973724437 0 1 0 17.00 0 a 8.50 2.5494532973724437 0 1 0 -17.00 0" />
      <path d="M 5.06 17.20 a 6.94 2.081619900539517 0 1 0 13.88 0 a 6.94 2.081619900539517 0 1 0 -13.88 0" />
      <path d="M 16.34 4.49 A 2 2 0 0 0 16.34 19.51" />
      <path d="M 16.34 4.49 A 2 2 0 0 1 16.34 19.51" />
      <path d="M 7.66 4.49 A 2 2 0 0 0 7.66 19.51" />
      <path d="M 7.66 4.49 A 2 2 0 0 1 7.66 19.51" />
      {children}
    </svg>
  );
});

export default NasoHut;
