import React from 'react';

export const iconData = {
  "id": "VolanoProtein",
  "name": "VolanoProtein",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 12.00 Q 14.61 12.85 18.63 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 16.81 Q 13.62 14.22 14.53 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 19.79 Q 12.00 14.75 9.47 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 19.79 Q 10.38 14.22 5.37 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 16.81 Q 9.39 12.85 3.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 Q 9.39 11.15 5.37 7.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 7.19 Q 10.38 9.78 9.47 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 4.21 Q 12.00 9.25 14.53 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 4.21 Q 13.62 9.78 18.63 7.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 7.19 Q 14.61 11.15 20.19 12.00"
      }
    ]
  ]
};

export const VolanoProtein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 12.00 Q 14.61 12.85 18.63 16.81" />
      <path d="M 18.63 16.81 Q 13.62 14.22 14.53 19.79" />
      <path d="M 14.53 19.79 Q 12.00 14.75 9.47 19.79" />
      <path d="M 9.47 19.79 Q 10.38 14.22 5.37 16.81" />
      <path d="M 5.37 16.81 Q 9.39 12.85 3.81 12.00" />
      <path d="M 3.81 12.00 Q 9.39 11.15 5.37 7.19" />
      <path d="M 5.37 7.19 Q 10.38 9.78 9.47 4.21" />
      <path d="M 9.47 4.21 Q 12.00 9.25 14.53 4.21" />
      <path d="M 14.53 4.21 Q 13.62 9.78 18.63 7.19" />
      <path d="M 18.63 7.19 Q 14.61 11.15 20.19 12.00" />
      {children}
    </svg>
  );
});

export default VolanoProtein;
