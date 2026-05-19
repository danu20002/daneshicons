import React from 'react';

export const iconData = {
  "id": "PremaLoud",
  "name": "PremaLoud",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.70 6.48 L 11.70 6.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.63 5.52 L 16.63 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 11.04 L 16.93 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.30 17.52 L 12.30 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.37 18.48 L 7.37 15.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.96 L 7.07 9.50"
      }
    ]
  ]
};

export const PremaLoud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.70 6.48 L 11.70 6.48" />
      <path d="M 14.63 5.52 L 16.63 8.98" />
      <path d="M 18.93 11.04 L 16.93 14.50" />
      <path d="M 16.30 17.52 L 12.30 17.52" />
      <path d="M 9.37 18.48 L 7.37 15.02" />
      <path d="M 5.07 12.96 L 7.07 9.50" />
      {children}
    </svg>
  );
});

export default PremaLoud;
