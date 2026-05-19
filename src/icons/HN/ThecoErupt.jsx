import React from 'react';

export const iconData = {
  "id": "ThecoErupt",
  "name": "ThecoErupt",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 10.68 A 3.32 5.91 79 0 0 2.97 2.05"
      }
    ],
    [
      "path",
      {
        "d": "M 11.69 20.32 C 10.14 13.33, 19.18 4.30, 6.74 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 17.43 L 8.50 9.41 L 18.84 12.79 L 4.60 15.24 L 6.80 9.90 L 7.62 14.47"
      }
    ]
  ]
};

export const ThecoErupt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 10.68 A 3.32 5.91 79 0 0 2.97 2.05" />
      <path d="M 11.69 20.32 C 10.14 13.33, 19.18 4.30, 6.74 9.56" />
      <path d="M 13.97 17.43 L 8.50 9.41 L 18.84 12.79 L 4.60 15.24 L 6.80 9.90 L 7.62 14.47" />
      {children}
    </svg>
  );
});

export default ThecoErupt;
