import React from 'react';

export const iconData = {
  "id": "ScandiFlux",
  "name": "ScandiFlux",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.74 4.99 C 4.40 8.52, 14.40 15.46, 15.17 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 7.49 2.16 C 4.16 18.25, 19.57 14.57, 20.08 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 9.17 C 5.22 17.93, 15.13 14.75, 15.25 15.89"
      }
    ]
  ]
};

export const ScandiFlux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.74 4.99 C 4.40 8.52, 14.40 15.46, 15.17 19.90" />
      <path d="M 7.49 2.16 C 4.16 18.25, 19.57 14.57, 20.08 17.49" />
      <path d="M 4.65 9.17 C 5.22 17.93, 15.13 14.75, 15.25 15.89" />
      {children}
    </svg>
  );
});

export default ScandiFlux;
