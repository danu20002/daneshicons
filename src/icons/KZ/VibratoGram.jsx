import React from 'react';

export const iconData = {
  "id": "VibratoGram",
  "name": "VibratoGram",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.18 3.92 C 8.28 17.04, 17.63 4.01, 19.90 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.82 8.54 C 10.88 13.95, 9.29 9.20, 14.15 18.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 7.95 C 14.71 9.84, 11.03 5.78, 21.48 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 2.40 C 6.79 4.02, 17.50 13.58, 17.97 21.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 8.78 C 4.97 13.49, 8.33 13.64, 14.70 19.55"
      }
    ]
  ]
};

export const VibratoGram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.18 3.92 C 8.28 17.04, 17.63 4.01, 19.90 18.06" />
      <path d="M 8.82 8.54 C 10.88 13.95, 9.29 9.20, 14.15 18.46" />
      <path d="M 4.04 7.95 C 14.71 9.84, 11.03 5.78, 21.48 15.65" />
      <path d="M 6.90 2.40 C 6.79 4.02, 17.50 13.58, 17.97 21.34" />
      <path d="M 5.93 8.78 C 4.97 13.49, 8.33 13.64, 14.70 19.55" />
      {children}
    </svg>
  );
});

export default VibratoGram;
