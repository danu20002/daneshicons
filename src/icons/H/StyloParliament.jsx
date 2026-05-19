import React from 'react';

export const iconData = {
  "id": "StyloParliament",
  "name": "StyloParliament",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.59 5.25 C 15.72 15.60, 17.29 14.03, 15.94 15.88"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 3.82 C 7.47 14.19, 15.27 12.57, 16.65 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 4.61 C 14.63 9.14, 5.59 4.84, 21.61 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 9.39 C 18.06 14.43, 13.46 16.38, 17.59 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 5.44 C 18.74 10.75, 17.92 10.44, 15.69 21.71"
      }
    ]
  ]
};

export const StyloParliament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.59 5.25 C 15.72 15.60, 17.29 14.03, 15.94 15.88" />
      <path d="M 9.82 3.82 C 7.47 14.19, 15.27 12.57, 16.65 14.89" />
      <path d="M 7.53 4.61 C 14.63 9.14, 5.59 4.84, 21.61 14.36" />
      <path d="M 7.22 9.39 C 18.06 14.43, 13.46 16.38, 17.59 21.85" />
      <path d="M 4.46 5.44 C 18.74 10.75, 17.92 10.44, 15.69 21.71" />
      {children}
    </svg>
  );
});

export default StyloParliament;
