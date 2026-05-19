import React from 'react';

export const iconData = {
  "id": "TubuloRamp",
  "name": "TubuloRamp",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 9.98 C 10.61 11.84, 14.00 12.80, 21.61 16.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 4.44 C 4.37 13.60, 7.88 5.33, 19.28 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 9.09 C 5.23 4.07, 16.69 10.14, 14.85 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 7.66 C 15.67 5.58, 16.98 18.83, 21.16 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.58 6.31 C 13.15 16.79, 19.82 4.67, 16.31 15.63"
      }
    ]
  ]
};

export const TubuloRamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 9.98 C 10.61 11.84, 14.00 12.80, 21.61 16.49" />
      <path d="M 6.26 4.44 C 4.37 13.60, 7.88 5.33, 19.28 18.30" />
      <path d="M 4.79 9.09 C 5.23 4.07, 16.69 10.14, 14.85 14.86" />
      <path d="M 3.82 7.66 C 15.67 5.58, 16.98 18.83, 21.16 16.82" />
      <path d="M 8.58 6.31 C 13.15 16.79, 19.82 4.67, 16.31 15.63" />
      {children}
    </svg>
  );
});

export default TubuloRamp;
