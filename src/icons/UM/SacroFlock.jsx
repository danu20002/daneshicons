import React from 'react';

export const iconData = {
  "id": "SacroFlock",
  "name": "SacroFlock",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.80 6.62 C 14.28 8.03, 12.25 18.73, 21.85 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 5.86 C 10.03 5.19, 17.79 18.13, 20.09 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 6.63 C 5.13 17.61, 11.52 7.91, 14.01 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 6.61 C 17.42 8.14, 18.75 7.95, 14.73 18.94"
      }
    ]
  ]
};

export const SacroFlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.80 6.62 C 14.28 8.03, 12.25 18.73, 21.85 20.89" />
      <path d="M 7.69 5.86 C 10.03 5.19, 17.79 18.13, 20.09 15.81" />
      <path d="M 5.73 6.63 C 5.13 17.61, 11.52 7.91, 14.01 18.70" />
      <path d="M 7.06 6.61 C 17.42 8.14, 18.75 7.95, 14.73 18.94" />
      {children}
    </svg>
  );
});

export default SacroFlock;
