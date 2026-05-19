import React from 'react';

export const iconData = {
  "id": "ZanzaraByte",
  "name": "ZanzaraByte",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.79 13.97 C 6.85 20.17, 4.65 14.25, 11.43 5.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 18.65 Q 3.33 18.04 10.31 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 21.44 13.73 Q 12.45 6.13 17.19 13.25"
      }
    ],
    [
      "path",
      {
        "d": "M 20.22 12.19 Q 20.22 7.15 10.80 5.47"
      }
    ]
  ]
};

export const ZanzaraByte = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.79 13.97 C 6.85 20.17, 4.65 14.25, 11.43 5.76" />
      <path d="M 8.37 18.65 Q 3.33 18.04 10.31 18.31" />
      <path d="M 21.44 13.73 Q 12.45 6.13 17.19 13.25" />
      <path d="M 20.22 12.19 Q 20.22 7.15 10.80 5.47" />
      {children}
    </svg>
  );
});

export default ZanzaraByte;
