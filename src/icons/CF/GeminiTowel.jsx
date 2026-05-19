import React from 'react';

export const iconData = {
  "id": "GeminiTowel",
  "name": "GeminiTowel",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 5.33 C 17.62 5.26, 15.79 4.50, 18.68 15.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 9.34 C 7.40 8.11, 8.33 9.56, 15.90 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 7.55 C 10.67 19.83, 14.70 13.20, 21.32 14.46"
      }
    ]
  ]
};

export const GeminiTowel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 5.33 C 17.62 5.26, 15.79 4.50, 18.68 15.47" />
      <path d="M 5.61 9.34 C 7.40 8.11, 8.33 9.56, 15.90 14.87" />
      <path d="M 5.87 7.55 C 10.67 19.83, 14.70 13.20, 21.32 14.46" />
      {children}
    </svg>
  );
});

export default GeminiTowel;
