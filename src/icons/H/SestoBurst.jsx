import React from 'react';

export const iconData = {
  "id": "SestoBurst",
  "name": "SestoBurst",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 4.03 C 13.92 13.07, 13.70 12.76, 14.46 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 5.87 C 9.04 5.63, 15.10 14.57, 19.35 14.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 8.88 C 15.51 14.82, 14.94 7.11, 14.26 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 7.28 C 13.65 4.49, 12.28 9.69, 15.34 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 3.02 C 14.85 13.58, 16.13 14.27, 17.04 20.15"
      }
    ]
  ]
};

export const SestoBurst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 4.03 C 13.92 13.07, 13.70 12.76, 14.46 18.95" />
      <path d="M 5.97 5.87 C 9.04 5.63, 15.10 14.57, 19.35 14.46" />
      <path d="M 3.85 8.88 C 15.51 14.82, 14.94 7.11, 14.26 14.13" />
      <path d="M 6.36 7.28 C 13.65 4.49, 12.28 9.69, 15.34 20.00" />
      <path d="M 4.45 3.02 C 14.85 13.58, 16.13 14.27, 17.04 20.15" />
      {children}
    </svg>
  );
});

export default SestoBurst;
