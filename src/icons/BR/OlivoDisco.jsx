import React from 'react';

export const iconData = {
  "id": "OlivoDisco",
  "name": "OlivoDisco",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 12.53 A 4.92 2.07 69 0 0 11.96 13.61"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 16.86 L 20.04 16.34"
      }
    ],
    [
      "path",
      {
        "d": "M 19.35 14.30 C 8.47 10.08, 21.75 17.75, 10.27 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 16.43 L 3.36 7.30 L 21.23 17.22 L 6.87 13.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 9.92 L 2.56 21.47 L 8.69 6.45 L 10.50 9.39 L 13.45 18.01 L 12.53 16.17 L 7.42 19.53 L 10.60 14.47"
      }
    ]
  ]
};

export const OlivoDisco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 12.53 A 4.92 2.07 69 0 0 11.96 13.61" />
      <path d="M 9.73 16.86 L 20.04 16.34" />
      <path d="M 19.35 14.30 C 8.47 10.08, 21.75 17.75, 10.27 20.21" />
      <path d="M 5.19 16.43 L 3.36 7.30 L 21.23 17.22 L 6.87 13.83" />
      <path d="M 4.22 9.92 L 2.56 21.47 L 8.69 6.45 L 10.50 9.39 L 13.45 18.01 L 12.53 16.17 L 7.42 19.53 L 10.60 14.47" />
      {children}
    </svg>
  );
});

export default OlivoDisco;
