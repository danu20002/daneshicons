import React from 'react';

export const iconData = {
  "id": "ClinoOrchard",
  "name": "ClinoOrchard",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.01 9.22 C 7.05 19.03, 5.77 14.09, 20.52 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 6.97 C 17.89 12.99, 13.34 16.46, 19.97 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 7.69 C 17.41 7.13, 5.36 4.40, 17.43 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 4.43 C 5.54 11.63, 15.71 4.09, 21.73 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 3.33 C 5.54 19.26, 8.40 13.70, 21.79 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 7.54 C 15.56 14.65, 9.35 9.83, 16.28 16.10"
      }
    ]
  ]
};

export const ClinoOrchard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.01 9.22 C 7.05 19.03, 5.77 14.09, 20.52 18.37" />
      <path d="M 9.54 6.97 C 17.89 12.99, 13.34 16.46, 19.97 18.97" />
      <path d="M 5.29 7.69 C 17.41 7.13, 5.36 4.40, 17.43 21.18" />
      <path d="M 2.69 4.43 C 5.54 11.63, 15.71 4.09, 21.73 17.52" />
      <path d="M 6.14 3.33 C 5.54 19.26, 8.40 13.70, 21.79 14.94" />
      <path d="M 6.17 7.54 C 15.56 14.65, 9.35 9.83, 16.28 16.10" />
      {children}
    </svg>
  );
});

export default ClinoOrchard;
