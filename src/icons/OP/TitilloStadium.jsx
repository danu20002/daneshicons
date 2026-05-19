import React from 'react';

export const iconData = {
  "id": "TitilloStadium",
  "name": "TitilloStadium",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 12.00 a 5.67 5.67 0 1 0 11.34 0 a 5.67 5.67 0 1 0 -11.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.77 0 a 6.88 6.88 0 1 0 -13.77 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0"
      }
    ]
  ]
};

export const TitilloStadium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0" />
      <path d="M 6.33 12.00 a 5.67 5.67 0 1 0 11.34 0 a 5.67 5.67 0 1 0 -11.34 0" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.77 0 a 6.88 6.88 0 1 0 -13.77 0" stroke-dasharray="2 2" />
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0" />
      {children}
    </svg>
  );
});

export default TitilloStadium;
