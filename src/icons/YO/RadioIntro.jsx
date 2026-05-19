import React from 'react';

export const iconData = {
  "id": "RadioIntro",
  "name": "RadioIntro",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 12.00 a 6.61 6.61 0 1 1 13.21 0 a 6.61 6.61 0 1 1 -13.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 12.00 L 22.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.41 17.38 L 19.94 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.45 20.24 L 13.80 22.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 19.25 L 6.82 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 14.86 L 2.26 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 9.14 L 2.26 8.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 4.75 L 6.82 3.02"
      }
    ],
    [
      "path",
      {
        "d": "M 13.45 3.76 L 13.80 1.79"
      }
    ],
    [
      "path",
      {
        "d": "M 18.41 6.62 L 19.94 5.33"
      }
    ]
  ]
};

export const RadioIntro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      <path d="M 5.39 12.00 a 6.61 6.61 0 1 1 13.21 0 a 6.61 6.61 0 1 1 -13.21 0" />
      <path d="M 20.37 12.00 L 22.37 12.00" />
      <path d="M 18.41 17.38 L 19.94 18.67" />
      <path d="M 13.45 20.24 L 13.80 22.21" />
      <path d="M 7.82 19.25 L 6.82 20.98" />
      <path d="M 4.14 14.86 L 2.26 15.55" />
      <path d="M 4.14 9.14 L 2.26 8.45" />
      <path d="M 7.82 4.75 L 6.82 3.02" />
      <path d="M 13.45 3.76 L 13.80 1.79" />
      <path d="M 18.41 6.62 L 19.94 5.33" />
      {children}
    </svg>
  );
});

export default RadioIntro;
