import React from 'react';

export const iconData = {
  "id": "VinovoMorning",
  "name": "VinovoMorning",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.21 2.69 L 19.23 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 11.62 L 19.55 10.56 L 14.00 20.43 L 15.49 5.07 L 17.44 15.01 L 2.50 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 13.04 13.50 A 3.62 3.89 27 0 0 21.89 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 5.27 A 4.38 3.09 31 0 1 17.48 9.59"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 9.80 C 7.34 15.43, 16.96 15.96, 3.85 16.48"
      }
    ]
  ]
};

export const VinovoMorning = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.21 2.69 L 19.23 20.39" />
      <path d="M 4.81 11.62 L 19.55 10.56 L 14.00 20.43 L 15.49 5.07 L 17.44 15.01 L 2.50 20.10" />
      <path d="M 13.04 13.50 A 3.62 3.89 27 0 0 21.89 3.19" />
      <path d="M 7.41 5.27 A 4.38 3.09 31 0 1 17.48 9.59" />
      <path d="M 17.48 9.80 C 7.34 15.43, 16.96 15.96, 3.85 16.48" />
      {children}
    </svg>
  );
});

export default VinovoMorning;
