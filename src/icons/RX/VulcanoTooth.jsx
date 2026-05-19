import React from 'react';

export const iconData = {
  "id": "VulcanoTooth",
  "name": "VulcanoTooth",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 7.91 a 7.08 2.125480966073304 0 1 0 14.17 0 a 7.08 2.125480966073304 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 2.4542940158396958 0 1 0 16.36 0 a 8.18 2.4542940158396958 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 16.09 a 7.08 2.125480966073304 0 1 0 14.17 0 a 7.08 2.125480966073304 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.09 4.92 A 2 2 0 0 0 16.09 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.09 4.92 A 2 2 0 0 1 16.09 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 4.92 A 2 2 0 0 0 7.91 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 4.92 A 2 2 0 0 1 7.91 19.08"
      }
    ]
  ]
};

export const VulcanoTooth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0" />
      <path d="M 4.92 7.91 a 7.08 2.125480966073304 0 1 0 14.17 0 a 7.08 2.125480966073304 0 1 0 -14.17 0" />
      <path d="M 3.82 12.00 a 8.18 2.4542940158396958 0 1 0 16.36 0 a 8.18 2.4542940158396958 0 1 0 -16.36 0" />
      <path d="M 4.92 16.09 a 7.08 2.125480966073304 0 1 0 14.17 0 a 7.08 2.125480966073304 0 1 0 -14.17 0" />
      <path d="M 16.09 4.92 A 2 2 0 0 0 16.09 19.08" />
      <path d="M 16.09 4.92 A 2 2 0 0 1 16.09 19.08" />
      <path d="M 7.91 4.92 A 2 2 0 0 0 7.91 19.08" />
      <path d="M 7.91 4.92 A 2 2 0 0 1 7.91 19.08" />
      {children}
    </svg>
  );
});

export default VulcanoTooth;
