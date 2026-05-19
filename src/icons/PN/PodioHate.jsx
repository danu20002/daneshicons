import React from 'react';

export const iconData = {
  "id": "PodioHate",
  "name": "PodioHate",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 10.85 L 15.66 10.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.99 11.33 L 14.22 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.95 12.73 L 9.71 15.08"
      }
    ],
    [
      "path",
      {
        "d": "M 11.60 13.13 L 8.36 10.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.80 11.96 L 12.04 8.16"
      }
    ]
  ]
};

export const PodioHate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 10.85 L 15.66 10.85" />
      <path d="M 12.99 11.33 L 14.22 15.13" />
      <path d="M 12.95 12.73 L 9.71 15.08" />
      <path d="M 11.60 13.13 L 8.36 10.78" />
      <path d="M 10.80 11.96 L 12.04 8.16" />
      {children}
    </svg>
  );
});

export default PodioHate;
