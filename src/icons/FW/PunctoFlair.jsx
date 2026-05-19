import React from 'react';

export const iconData = {
  "id": "PunctoFlair",
  "name": "PunctoFlair",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 2.29 C 7.98 7.12, 13.30 4.07, 14.47 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.87 6.56 C 13.40 16.70, 10.19 13.48, 21.01 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 2.20 C 7.77 16.47, 14.27 9.93, 14.16 14.57"
      }
    ]
  ]
};

export const PunctoFlair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 2.29 C 7.98 7.12, 13.30 4.07, 14.47 20.28" />
      <path d="M 8.87 6.56 C 13.40 16.70, 10.19 13.48, 21.01 19.83" />
      <path d="M 4.81 2.20 C 7.77 16.47, 14.27 9.93, 14.16 14.57" />
      {children}
    </svg>
  );
});

export default PunctoFlair;
