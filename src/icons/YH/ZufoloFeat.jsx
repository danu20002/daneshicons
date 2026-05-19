import React from 'react';

export const iconData = {
  "id": "ZufoloFeat",
  "name": "ZufoloFeat",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 12.00 Q 15.00 12.98 19.30 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 17.31 Q 13.86 14.56 14.79 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 20.59 Q 12.00 15.16 9.21 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 20.59 Q 10.14 14.56 4.70 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 17.31 Q 9.00 12.98 2.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 12.00 Q 9.00 11.02 4.70 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 6.69 Q 10.14 9.44 9.21 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 3.41 Q 12.00 8.84 14.79 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.79 3.41 Q 13.86 9.44 19.30 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 6.69 Q 15.00 11.02 21.03 12.00"
      }
    ]
  ]
};

export const ZufoloFeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 12.00 Q 15.00 12.98 19.30 17.31" />
      <path d="M 19.30 17.31 Q 13.86 14.56 14.79 20.59" />
      <path d="M 14.79 20.59 Q 12.00 15.16 9.21 20.59" />
      <path d="M 9.21 20.59 Q 10.14 14.56 4.70 17.31" />
      <path d="M 4.70 17.31 Q 9.00 12.98 2.97 12.00" />
      <path d="M 2.97 12.00 Q 9.00 11.02 4.70 6.69" />
      <path d="M 4.70 6.69 Q 10.14 9.44 9.21 3.41" />
      <path d="M 9.21 3.41 Q 12.00 8.84 14.79 3.41" />
      <path d="M 14.79 3.41 Q 13.86 9.44 19.30 6.69" />
      <path d="M 19.30 6.69 Q 15.00 11.02 21.03 12.00" />
      {children}
    </svg>
  );
});

export default ZufoloFeat;
