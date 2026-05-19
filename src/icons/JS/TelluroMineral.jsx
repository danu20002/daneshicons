import React from 'react';

export const iconData = {
  "id": "TelluroMineral",
  "name": "TelluroMineral",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.05 16.66 C 19.69 12.90, 9.17 10.48, 16.35 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.71 10.21 A 5.32 4.17 144 0 1 21.93 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 2.77 L 21.41 19.31 L 18.93 5.99 L 18.68 4.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 17.28 L 14.26 13.79 L 9.37 3.47 L 20.38 18.18 L 7.44 8.84 L 5.11 13.92 L 6.30 6.48 L 19.06 15.69"
      }
    ]
  ]
};

export const TelluroMineral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.05 16.66 C 19.69 12.90, 9.17 10.48, 16.35 16.46" />
      <path d="M 12.71 10.21 A 5.32 4.17 144 0 1 21.93 19.16" />
      <path d="M 10.40 2.77 L 21.41 19.31 L 18.93 5.99 L 18.68 4.48" />
      <path d="M 7.91 17.28 L 14.26 13.79 L 9.37 3.47 L 20.38 18.18 L 7.44 8.84 L 5.11 13.92 L 6.30 6.48 L 19.06 15.69" />
      {children}
    </svg>
  );
});

export default TelluroMineral;
