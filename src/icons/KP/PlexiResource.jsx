import React from 'react';

export const iconData = {
  "id": "PlexiResource",
  "name": "PlexiResource",
  "category": "KP",
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
        "d": "M 4.29 9.27 a 7.71 2.313935278461567 0 1 0 15.43 0 a 7.71 2.313935278461567 0 1 0 -15.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 14.73 a 7.71 2.313935278461567 0 1 0 15.43 0 a 7.71 2.313935278461567 0 1 0 -15.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.78 6.22 A 2 2 0 0 0 17.78 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.78 6.22 A 2 2 0 0 1 17.78 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 0 12.00 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 1 12.00 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 6.22 A 2 2 0 0 0 6.22 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 6.22 A 2 2 0 0 1 6.22 17.78"
      }
    ]
  ]
};

export const PlexiResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 9.27 a 7.71 2.313935278461567 0 1 0 15.43 0 a 7.71 2.313935278461567 0 1 0 -15.43 0" />
      <path d="M 4.29 14.73 a 7.71 2.313935278461567 0 1 0 15.43 0 a 7.71 2.313935278461567 0 1 0 -15.43 0" />
      <path d="M 17.78 6.22 A 2 2 0 0 0 17.78 17.78" />
      <path d="M 17.78 6.22 A 2 2 0 0 1 17.78 17.78" />
      <path d="M 12.00 3.82 A 2 2 0 0 0 12.00 20.18" />
      <path d="M 12.00 3.82 A 2 2 0 0 1 12.00 20.18" />
      <path d="M 6.22 6.22 A 2 2 0 0 0 6.22 17.78" />
      <path d="M 6.22 6.22 A 2 2 0 0 1 6.22 17.78" />
      {children}
    </svg>
  );
});

export default PlexiResource;
