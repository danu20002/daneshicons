import React from 'react';

export const iconData = {
  "id": "SyntoHollow",
  "name": "SyntoHollow",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 3.87 C 11.24 18.32, 4.57 8.48, 16.19 17.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 2.88 C 7.61 5.00, 16.39 8.79, 14.22 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 3.59 C 10.51 19.79, 8.54 13.49, 15.17 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 2.74 C 17.33 14.85, 10.58 9.98, 19.19 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 9.83 C 9.63 11.51, 9.83 17.19, 20.02 14.24"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 5.88 C 8.95 19.78, 7.33 10.03, 18.61 19.73"
      }
    ]
  ]
};

export const SyntoHollow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 3.87 C 11.24 18.32, 4.57 8.48, 16.19 17.36" />
      <path d="M 7.30 2.88 C 7.61 5.00, 16.39 8.79, 14.22 16.54" />
      <path d="M 7.47 3.59 C 10.51 19.79, 8.54 13.49, 15.17 18.92" />
      <path d="M 2.04 2.74 C 17.33 14.85, 10.58 9.98, 19.19 19.82" />
      <path d="M 6.42 9.83 C 9.63 11.51, 9.83 17.19, 20.02 14.24" />
      <path d="M 7.53 5.88 C 8.95 19.78, 7.33 10.03, 18.61 19.73" />
      {children}
    </svg>
  );
});

export default SyntoHollow;
