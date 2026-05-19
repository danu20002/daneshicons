import React from 'react';

export const iconData = {
  "id": "SomaProposal",
  "name": "SomaProposal",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.03 0 a 7.02 7.02 0 1 0 -14.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 12.00 a 4.18 4.18 0 1 1 8.36 0 a 4.18 4.18 0 1 1 -8.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 12.00 L 20.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 15.52 L 19.16 16.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 17.93 L 15.54 19.75"
      }
    ],
    [
      "path",
      {
        "d": "M 11.07 18.45 L 10.79 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 16.92 L 6.42 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 13.84 L 3.83 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 10.16 L 3.83 9.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 7.08 L 6.42 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 11.07 5.55 L 10.79 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 6.07 L 15.54 4.25"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 8.48 L 19.16 7.40"
      }
    ]
  ]
};

export const SomaProposal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.03 0 a 7.02 7.02 0 1 0 -14.03 0" />
      <path d="M 7.82 12.00 a 4.18 4.18 0 1 1 8.36 0 a 4.18 4.18 0 1 1 -8.36 0" />
      <path d="M 18.52 12.00 L 20.52 12.00" />
      <path d="M 17.48 15.52 L 19.16 16.60" />
      <path d="M 14.71 17.93 L 15.54 19.75" />
      <path d="M 11.07 18.45 L 10.79 20.43" />
      <path d="M 7.73 16.92 L 6.42 18.44" />
      <path d="M 5.75 13.84 L 3.83 14.40" />
      <path d="M 5.75 10.16 L 3.83 9.60" />
      <path d="M 7.73 7.08 L 6.42 5.56" />
      <path d="M 11.07 5.55 L 10.79 3.57" />
      <path d="M 14.71 6.07 L 15.54 4.25" />
      <path d="M 17.48 8.48 L 19.16 7.40" />
      {children}
    </svg>
  );
});

export default SomaProposal;
