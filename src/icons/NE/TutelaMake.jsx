import React from 'react';

export const iconData = {
  "id": "TutelaMake",
  "name": "TutelaMake",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.99 9.35 C 6.64 9.45, 7.10 14.93, 19.74 15.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 3.31 C 11.40 17.91, 10.84 17.20, 15.11 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 9.37 C 10.20 18.61, 16.79 13.54, 14.61 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 5.69 C 13.43 17.03, 6.98 12.30, 14.24 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 7.40 C 17.38 8.69, 5.50 8.14, 14.59 15.39"
      }
    ]
  ]
};

export const TutelaMake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.99 9.35 C 6.64 9.45, 7.10 14.93, 19.74 15.34" />
      <path d="M 4.77 3.31 C 11.40 17.91, 10.84 17.20, 15.11 21.84" />
      <path d="M 5.41 9.37 C 10.20 18.61, 16.79 13.54, 14.61 17.85" />
      <path d="M 5.44 5.69 C 13.43 17.03, 6.98 12.30, 14.24 20.11" />
      <path d="M 6.16 7.40 C 17.38 8.69, 5.50 8.14, 14.59 15.39" />
      {children}
    </svg>
  );
});

export default TutelaMake;
