import React from 'react';

export const iconData = {
  "id": "ThalamoIntro",
  "name": "ThalamoIntro",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 12.00 a 6.81 6.81 0 1 0 13.62 0 a 6.81 6.81 0 1 0 -13.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0"
      }
    ]
  ]
};

export const ThalamoIntro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" />
      <path d="M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0" />
      <path d="M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0" />
      <path d="M 5.19 12.00 a 6.81 6.81 0 1 0 13.62 0 a 6.81 6.81 0 1 0 -13.62 0" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0" />
      {children}
    </svg>
  );
});

export default ThalamoIntro;
