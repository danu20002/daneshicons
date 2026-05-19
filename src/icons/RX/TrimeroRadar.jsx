import React from 'react';

export const iconData = {
  "id": "TrimeroRadar",
  "name": "TrimeroRadar",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.46 12.00 a 9.54 9.54 0 1 0 19.07 0 a 9.54 9.54 0 1 0 -19.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 7.23 a 8.26 2.4773213535627265 0 1 0 16.52 0 a 8.26 2.4773213535627265 0 1 0 -16.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.46 12.00 a 9.54 2.860564300697297 0 1 0 19.07 0 a 9.54 2.860564300697297 0 1 0 -19.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 16.77 a 8.26 2.4773213535627265 0 1 0 16.52 0 a 8.26 2.4773213535627265 0 1 0 -16.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.46 A 2 2 0 0 0 12.00 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.46 A 2 2 0 0 1 12.00 21.54"
      }
    ]
  ]
};

export const TrimeroRadar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.46 12.00 a 9.54 9.54 0 1 0 19.07 0 a 9.54 9.54 0 1 0 -19.07 0" />
      <path d="M 3.74 7.23 a 8.26 2.4773213535627265 0 1 0 16.52 0 a 8.26 2.4773213535627265 0 1 0 -16.52 0" />
      <path d="M 2.46 12.00 a 9.54 2.860564300697297 0 1 0 19.07 0 a 9.54 2.860564300697297 0 1 0 -19.07 0" />
      <path d="M 3.74 16.77 a 8.26 2.4773213535627265 0 1 0 16.52 0 a 8.26 2.4773213535627265 0 1 0 -16.52 0" />
      <path d="M 12.00 2.46 A 2 2 0 0 0 12.00 21.54" />
      <path d="M 12.00 2.46 A 2 2 0 0 1 12.00 21.54" />
      {children}
    </svg>
  );
});

export default TrimeroRadar;
