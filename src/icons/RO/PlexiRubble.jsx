import React from 'react';

export const iconData = {
  "id": "PlexiRubble",
  "name": "PlexiRubble",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 7.62 C 7.71 19.24, 15.52 16.14, 18.47 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 6.89 C 8.94 18.45, 6.99 16.74, 18.21 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 9.51 C 8.42 5.16, 5.42 11.67, 19.70 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 8.80 4.77 C 13.66 9.21, 16.58 4.16, 16.10 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 2.70 C 19.76 14.48, 19.34 15.67, 20.48 17.11"
      }
    ]
  ]
};

export const PlexiRubble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 7.62 C 7.71 19.24, 15.52 16.14, 18.47 16.35" />
      <path d="M 8.66 6.89 C 8.94 18.45, 6.99 16.74, 18.21 14.07" />
      <path d="M 5.57 9.51 C 8.42 5.16, 5.42 11.67, 19.70 16.71" />
      <path d="M 8.80 4.77 C 13.66 9.21, 16.58 4.16, 16.10 16.70" />
      <path d="M 3.79 2.70 C 19.76 14.48, 19.34 15.67, 20.48 17.11" />
      {children}
    </svg>
  );
});

export default PlexiRubble;
