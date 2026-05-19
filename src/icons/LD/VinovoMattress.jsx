import React from 'react';

export const iconData = {
  "id": "VinovoMattress",
  "name": "VinovoMattress",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 12.00 Q 14.66 12.71 18.96 16.02"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 16.02 Q 13.95 13.95 16.02 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 18.96 Q 12.71 14.66 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.03 Q 11.29 14.66 7.98 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 18.96 Q 10.05 13.95 5.04 16.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 16.02 Q 9.34 12.71 3.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 Q 9.34 11.29 5.04 7.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 7.98 Q 10.05 10.05 7.98 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.04 Q 11.29 9.34 12.00 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 Q 12.71 9.34 16.02 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.04 Q 13.95 10.05 18.96 7.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 7.98 Q 14.66 11.29 20.03 12.00"
      }
    ]
  ]
};

export const VinovoMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 12.00 Q 14.66 12.71 18.96 16.02" />
      <path d="M 18.96 16.02 Q 13.95 13.95 16.02 18.96" />
      <path d="M 16.02 18.96 Q 12.71 14.66 12.00 20.03" />
      <path d="M 12.00 20.03 Q 11.29 14.66 7.98 18.96" />
      <path d="M 7.98 18.96 Q 10.05 13.95 5.04 16.02" />
      <path d="M 5.04 16.02 Q 9.34 12.71 3.97 12.00" />
      <path d="M 3.97 12.00 Q 9.34 11.29 5.04 7.98" />
      <path d="M 5.04 7.98 Q 10.05 10.05 7.98 5.04" />
      <path d="M 7.98 5.04 Q 11.29 9.34 12.00 3.97" />
      <path d="M 12.00 3.97 Q 12.71 9.34 16.02 5.04" />
      <path d="M 16.02 5.04 Q 13.95 10.05 18.96 7.98" />
      <path d="M 18.96 7.98 Q 14.66 11.29 20.03 12.00" />
      {children}
    </svg>
  );
});

export default VinovoMattress;
