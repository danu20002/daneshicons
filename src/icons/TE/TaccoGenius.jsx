import React from 'react';

export const iconData = {
  "id": "TaccoGenius",
  "name": "TaccoGenius",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.91 12.00 Q 15.80 13.23 19.21 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 17.24 Q 14.35 15.23 14.75 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 20.47 Q 12.00 15.99 9.25 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 20.47 Q 9.65 15.23 4.79 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 17.24 Q 8.20 13.23 3.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 12.00 Q 8.20 10.77 4.79 6.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 6.76 Q 9.65 8.77 9.25 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 3.53 Q 12.00 8.01 14.75 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 3.53 Q 14.35 8.77 19.21 6.76"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 6.76 Q 15.80 10.77 20.91 12.00"
      }
    ]
  ]
};

export const TaccoGenius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.91 12.00 Q 15.80 13.23 19.21 17.24" />
      <path d="M 19.21 17.24 Q 14.35 15.23 14.75 20.47" />
      <path d="M 14.75 20.47 Q 12.00 15.99 9.25 20.47" />
      <path d="M 9.25 20.47 Q 9.65 15.23 4.79 17.24" />
      <path d="M 4.79 17.24 Q 8.20 13.23 3.09 12.00" />
      <path d="M 3.09 12.00 Q 8.20 10.77 4.79 6.76" />
      <path d="M 4.79 6.76 Q 9.65 8.77 9.25 3.53" />
      <path d="M 9.25 3.53 Q 12.00 8.01 14.75 3.53" />
      <path d="M 14.75 3.53 Q 14.35 8.77 19.21 6.76" />
      <path d="M 19.21 6.76 Q 15.80 10.77 20.91 12.00" />
      {children}
    </svg>
  );
});

export default TaccoGenius;
