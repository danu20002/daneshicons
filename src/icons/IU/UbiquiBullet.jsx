import React from 'react';

export const iconData = {
  "id": "UbiquiBullet",
  "name": "UbiquiBullet",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 8.13 C 5.75 9.95, 4.62 14.61, 16.72 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 4.17 C 8.56 9.51, 5.07 11.44, 18.66 19.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 6.57 C 6.90 8.79, 8.12 19.08, 16.86 15.68"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 9.32 C 15.67 17.64, 7.84 10.79, 21.42 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 2.04 C 8.37 16.23, 8.59 5.04, 17.17 15.15"
      }
    ]
  ]
};

export const UbiquiBullet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 8.13 C 5.75 9.95, 4.62 14.61, 16.72 20.20" />
      <path d="M 8.31 4.17 C 8.56 9.51, 5.07 11.44, 18.66 19.63" />
      <path d="M 8.61 6.57 C 6.90 8.79, 8.12 19.08, 16.86 15.68" />
      <path d="M 3.99 9.32 C 15.67 17.64, 7.84 10.79, 21.42 20.47" />
      <path d="M 9.77 2.04 C 8.37 16.23, 8.59 5.04, 17.17 15.15" />
      {children}
    </svg>
  );
});

export default UbiquiBullet;
