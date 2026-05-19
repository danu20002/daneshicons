import React from 'react';

export const iconData = {
  "id": "GravitoFur",
  "name": "GravitoFur",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.57 4.15 L 9.41 15.37 L 2.96 21.21 L 5.73 21.32 L 9.87 3.95 L 9.76 7.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 12.82 L 9.69 4.95"
      }
    ],
    [
      "path",
      {
        "d": "M 14.31 15.28 L 21.43 13.45 L 16.97 10.84 L 15.22 14.10 L 15.46 2.37 L 8.58 13.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 17.52 L 8.07 6.38"
      }
    ],
    [
      "path",
      {
        "d": "M 19.10 7.77 L 4.42 10.43"
      }
    ]
  ]
};

export const GravitoFur = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.57 4.15 L 9.41 15.37 L 2.96 21.21 L 5.73 21.32 L 9.87 3.95 L 9.76 7.15" />
      <path d="M 5.20 12.82 L 9.69 4.95" />
      <path d="M 14.31 15.28 L 21.43 13.45 L 16.97 10.84 L 15.22 14.10 L 15.46 2.37 L 8.58 13.49" />
      <path d="M 6.82 17.52 L 8.07 6.38" />
      <path d="M 19.10 7.77 L 4.42 10.43" />
      {children}
    </svg>
  );
});

export default GravitoFur;
