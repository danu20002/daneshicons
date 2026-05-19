import React from 'react';

export const iconData = {
  "id": "ZippoRadial",
  "name": "ZippoRadial",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.16 8.46 C 17.61 5.61, 11.57 8.72, 18.38 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 5.44 C 10.40 14.10, 17.67 7.04, 21.55 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 2.89 C 15.96 4.78, 12.98 12.89, 15.20 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 4.37 C 15.28 5.02, 7.29 9.62, 14.48 21.08"
      }
    ]
  ]
};

export const ZippoRadial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.16 8.46 C 17.61 5.61, 11.57 8.72, 18.38 21.31" />
      <path d="M 4.56 5.44 C 10.40 14.10, 17.67 7.04, 21.55 18.81" />
      <path d="M 9.94 2.89 C 15.96 4.78, 12.98 12.89, 15.20 16.33" />
      <path d="M 4.75 4.37 C 15.28 5.02, 7.29 9.62, 14.48 21.08" />
      {children}
    </svg>
  );
});

export default ZippoRadial;
