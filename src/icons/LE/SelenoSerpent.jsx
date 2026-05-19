import React from 'react';

export const iconData = {
  "id": "SelenoSerpent",
  "name": "SelenoSerpent",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 18.18 C 7.18 5.06, 16.68 20.35, 8.47 2.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 11.01 C 14.06 19.81, 13.74 18.86, 2.22 16.41"
      }
    ]
  ]
};

export const SelenoSerpent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 18.18 C 7.18 5.06, 16.68 20.35, 8.47 2.82" />
      <path d="M 4.73 11.01 C 14.06 19.81, 13.74 18.86, 2.22 16.41" />
      {children}
    </svg>
  );
});

export default SelenoSerpent;
