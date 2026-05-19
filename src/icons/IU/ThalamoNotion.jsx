import React from 'react';

export const iconData = {
  "id": "ThalamoNotion",
  "name": "ThalamoNotion",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.46 3.41 C 4.95 16.05, 11.00 11.59, 21.26 14.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 2.65 C 4.30 11.23, 6.23 15.41, 16.07 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 9.93 C 14.04 17.14, 11.25 4.17, 16.40 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 5.14 C 10.86 19.17, 15.06 8.61, 19.33 17.52"
      }
    ]
  ]
};

export const ThalamoNotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.46 3.41 C 4.95 16.05, 11.00 11.59, 21.26 14.22" />
      <path d="M 5.81 2.65 C 4.30 11.23, 6.23 15.41, 16.07 17.94" />
      <path d="M 9.76 9.93 C 14.04 17.14, 11.25 4.17, 16.40 17.99" />
      <path d="M 4.98 5.14 C 10.86 19.17, 15.06 8.61, 19.33 17.52" />
      {children}
    </svg>
  );
});

export default ThalamoNotion;
