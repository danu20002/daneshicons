import React from 'react';

export const iconData = {
  "id": "UliginoSymmetry",
  "name": "UliginoSymmetry",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.15 5.94 C 4.88 9.34, 12.91 11.70, 18.15 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 6.75 C 7.43 8.39, 17.19 5.32, 19.45 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 6.86 C 10.47 18.42, 11.92 7.09, 14.16 15.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 2.29 C 12.00 10.76, 14.91 7.85, 17.04 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.25 C 13.47 16.86, 8.92 18.56, 21.32 15.97"
      }
    ]
  ]
};

export const UliginoSymmetry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.15 5.94 C 4.88 9.34, 12.91 11.70, 18.15 16.59" />
      <path d="M 7.68 6.75 C 7.43 8.39, 17.19 5.32, 19.45 18.94" />
      <path d="M 6.79 6.86 C 10.47 18.42, 11.92 7.09, 14.16 15.78" />
      <path d="M 5.37 2.29 C 12.00 10.76, 14.91 7.85, 17.04 19.80" />
      <path d="M 7.97 5.25 C 13.47 16.86, 8.92 18.56, 21.32 15.97" />
      {children}
    </svg>
  );
});

export default UliginoSymmetry;
