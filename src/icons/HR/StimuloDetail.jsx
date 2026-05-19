import React from 'react';

export const iconData = {
  "id": "StimuloDetail",
  "name": "StimuloDetail",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 8.64 0 1 0 17.29 0 a 8.64 8.64 0 1 0 -17.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 7.68 a 7.49 2.2459567562937726 0 1 0 14.97 0 a 7.49 2.2459567562937726 0 1 0 -14.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 2.5934074756689367 0 1 0 17.29 0 a 8.64 2.5934074756689367 0 1 0 -17.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 16.32 a 7.49 2.2459567562937726 0 1 0 14.97 0 a 7.49 2.2459567562937726 0 1 0 -14.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.36 A 2 2 0 0 0 12.00 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.36 A 2 2 0 0 1 12.00 20.64"
      }
    ]
  ]
};

export const StimuloDetail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 12.00 a 8.64 8.64 0 1 0 17.29 0 a 8.64 8.64 0 1 0 -17.29 0" />
      <path d="M 4.51 7.68 a 7.49 2.2459567562937726 0 1 0 14.97 0 a 7.49 2.2459567562937726 0 1 0 -14.97 0" />
      <path d="M 3.36 12.00 a 8.64 2.5934074756689367 0 1 0 17.29 0 a 8.64 2.5934074756689367 0 1 0 -17.29 0" />
      <path d="M 4.51 16.32 a 7.49 2.2459567562937726 0 1 0 14.97 0 a 7.49 2.2459567562937726 0 1 0 -14.97 0" />
      <path d="M 12.00 3.36 A 2 2 0 0 0 12.00 20.64" />
      <path d="M 12.00 3.36 A 2 2 0 0 1 12.00 20.64" />
      {children}
    </svg>
  );
});

export default StimuloDetail;
