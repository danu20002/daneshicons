import React from 'react';

export const iconData = {
  "id": "TomboSwamp",
  "name": "TomboSwamp",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.30 6.03 C 16.19 16.40, 6.27 18.39, 21.58 20.25"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 7.18 C 19.98 18.96, 4.29 13.50, 19.83 16.04"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 8.99 C 14.94 16.35, 19.66 17.47, 17.75 18.94"
      }
    ]
  ]
};

export const TomboSwamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.30 6.03 C 16.19 16.40, 6.27 18.39, 21.58 20.25" />
      <path d="M 8.92 7.18 C 19.98 18.96, 4.29 13.50, 19.83 16.04" />
      <path d="M 5.61 8.99 C 14.94 16.35, 19.66 17.47, 17.75 18.94" />
      {children}
    </svg>
  );
});

export default TomboSwamp;
