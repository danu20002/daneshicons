import React from 'react';

export const iconData = {
  "id": "VibratoSymmetry",
  "name": "VibratoSymmetry",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.15 12.00 a 9.85 9.85 0 1 0 19.71 0 a 9.85 9.85 0 1 0 -19.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 6.09 a 7.88 2.3646735764667395 0 1 0 15.76 0 a 7.88 2.3646735764667395 0 1 0 -15.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 10.03 a 9.65 2.8961218352928455 0 1 0 19.31 0 a 9.65 2.8961218352928455 0 1 0 -19.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 13.97 a 9.65 2.8961218352928455 0 1 0 19.31 0 a 9.65 2.8961218352928455 0 1 0 -19.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 17.91 a 7.88 2.364673576466739 0 1 0 15.76 0 a 7.88 2.364673576466739 0 1 0 -15.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.15 A 2 2 0 0 0 12.00 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.15 A 2 2 0 0 1 12.00 21.85"
      }
    ]
  ]
};

export const VibratoSymmetry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.15 12.00 a 9.85 9.85 0 1 0 19.71 0 a 9.85 9.85 0 1 0 -19.71 0" />
      <path d="M 4.12 6.09 a 7.88 2.3646735764667395 0 1 0 15.76 0 a 7.88 2.3646735764667395 0 1 0 -15.76 0" />
      <path d="M 2.35 10.03 a 9.65 2.8961218352928455 0 1 0 19.31 0 a 9.65 2.8961218352928455 0 1 0 -19.31 0" />
      <path d="M 2.35 13.97 a 9.65 2.8961218352928455 0 1 0 19.31 0 a 9.65 2.8961218352928455 0 1 0 -19.31 0" />
      <path d="M 4.12 17.91 a 7.88 2.364673576466739 0 1 0 15.76 0 a 7.88 2.364673576466739 0 1 0 -15.76 0" />
      <path d="M 12.00 2.15 A 2 2 0 0 0 12.00 21.85" />
      <path d="M 12.00 2.15 A 2 2 0 0 1 12.00 21.85" />
      {children}
    </svg>
  );
});

export default VibratoSymmetry;
