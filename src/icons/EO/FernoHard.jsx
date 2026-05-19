import React from 'react';

export const iconData = {
  "id": "FernoHard",
  "name": "FernoHard",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.24 12.00 Q 15.89 13.26 19.48 17.43"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 17.43 Q 14.40 15.31 14.86 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 20.79 Q 12.00 16.09 9.14 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 20.79 Q 9.60 15.31 4.52 17.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 17.43 Q 8.11 13.26 2.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 12.00 Q 8.11 10.74 4.52 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.57 Q 9.60 8.69 9.14 3.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 3.21 Q 12.00 7.91 14.86 3.21"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 3.21 Q 14.40 8.69 19.48 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 6.57 Q 15.89 10.74 21.24 12.00"
      }
    ]
  ]
};

export const FernoHard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.24 12.00 Q 15.89 13.26 19.48 17.43" />
      <path d="M 19.48 17.43 Q 14.40 15.31 14.86 20.79" />
      <path d="M 14.86 20.79 Q 12.00 16.09 9.14 20.79" />
      <path d="M 9.14 20.79 Q 9.60 15.31 4.52 17.43" />
      <path d="M 4.52 17.43 Q 8.11 13.26 2.76 12.00" />
      <path d="M 2.76 12.00 Q 8.11 10.74 4.52 6.57" />
      <path d="M 4.52 6.57 Q 9.60 8.69 9.14 3.21" />
      <path d="M 9.14 3.21 Q 12.00 7.91 14.86 3.21" />
      <path d="M 14.86 3.21 Q 14.40 8.69 19.48 6.57" />
      <path d="M 19.48 6.57 Q 15.89 10.74 21.24 12.00" />
      {children}
    </svg>
  );
});

export default FernoHard;
