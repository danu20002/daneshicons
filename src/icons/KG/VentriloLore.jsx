import React from 'react';

export const iconData = {
  "id": "VentriloLore",
  "name": "VentriloLore",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.43 7.24 C 11.46 7.45, 14.26 16.79, 16.01 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 3.63 C 4.43 17.16, 16.61 13.29, 15.91 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 3.70 C 19.85 5.20, 7.03 8.36, 19.58 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 10.00 8.42 C 6.36 17.39, 19.49 13.91, 16.36 15.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 5.35 C 13.88 10.07, 13.94 6.29, 19.57 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 7.17 C 18.29 13.80, 4.17 19.32, 19.34 20.54"
      }
    ]
  ]
};

export const VentriloLore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.43 7.24 C 11.46 7.45, 14.26 16.79, 16.01 15.65" />
      <path d="M 3.78 3.63 C 4.43 17.16, 16.61 13.29, 15.91 16.28" />
      <path d="M 9.22 3.70 C 19.85 5.20, 7.03 8.36, 19.58 20.91" />
      <path d="M 10.00 8.42 C 6.36 17.39, 19.49 13.91, 16.36 15.39" />
      <path d="M 8.40 5.35 C 13.88 10.07, 13.94 6.29, 19.57 21.18" />
      <path d="M 5.67 7.17 C 18.29 13.80, 4.17 19.32, 19.34 20.54" />
      {children}
    </svg>
  );
});

export default VentriloLore;
