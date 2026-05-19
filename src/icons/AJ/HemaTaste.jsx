import React from 'react';

export const iconData = {
  "id": "HemaTaste",
  "name": "HemaTaste",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 12.00 a 9.04 9.04 0 1 0 18.09 0 a 9.04 9.04 0 1 0 -18.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 8.99 a 8.53 2.5580422096279753 0 1 0 17.05 0 a 8.53 2.5580422096279753 0 1 0 -17.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 15.01 a 8.53 2.5580422096279753 0 1 0 17.05 0 a 8.53 2.5580422096279753 0 1 0 -17.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.17 A 2 2 0 0 0 16.52 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.17 A 2 2 0 0 1 16.52 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.17 A 2 2 0 0 0 7.48 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.17 A 2 2 0 0 1 7.48 19.83"
      }
    ]
  ]
};

export const HemaTaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 12.00 a 9.04 9.04 0 1 0 18.09 0 a 9.04 9.04 0 1 0 -18.09 0" />
      <path d="M 3.47 8.99 a 8.53 2.5580422096279753 0 1 0 17.05 0 a 8.53 2.5580422096279753 0 1 0 -17.05 0" />
      <path d="M 3.47 15.01 a 8.53 2.5580422096279753 0 1 0 17.05 0 a 8.53 2.5580422096279753 0 1 0 -17.05 0" />
      <path d="M 16.52 4.17 A 2 2 0 0 0 16.52 19.83" />
      <path d="M 16.52 4.17 A 2 2 0 0 1 16.52 19.83" />
      <path d="M 7.48 4.17 A 2 2 0 0 0 7.48 19.83" />
      <path d="M 7.48 4.17 A 2 2 0 0 1 7.48 19.83" />
      {children}
    </svg>
  );
});

export default HemaTaste;
