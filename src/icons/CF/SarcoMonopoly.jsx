import React from 'react';

export const iconData = {
  "id": "SarcoMonopoly",
  "name": "SarcoMonopoly",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 9.33 C 6.99 9.00, 11.32 15.52, 17.73 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 9.17 C 10.70 10.05, 12.54 16.27, 21.06 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 7.39 C 15.77 9.09, 5.72 15.56, 14.45 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 5.84 C 9.91 9.34, 4.88 7.82, 15.11 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 4.32 C 7.01 8.46, 19.66 14.29, 16.75 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 9.29 6.07 C 19.43 13.00, 6.97 16.22, 18.34 19.14"
      }
    ]
  ]
};

export const SarcoMonopoly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 9.33 C 6.99 9.00, 11.32 15.52, 17.73 17.45" />
      <path d="M 6.57 9.17 C 10.70 10.05, 12.54 16.27, 21.06 16.69" />
      <path d="M 6.44 7.39 C 15.77 9.09, 5.72 15.56, 14.45 19.59" />
      <path d="M 3.39 5.84 C 9.91 9.34, 4.88 7.82, 15.11 18.53" />
      <path d="M 6.80 4.32 C 7.01 8.46, 19.66 14.29, 16.75 18.18" />
      <path d="M 9.29 6.07 C 19.43 13.00, 6.97 16.22, 18.34 19.14" />
      {children}
    </svg>
  );
});

export default SarcoMonopoly;
