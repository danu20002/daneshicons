import React from 'react';

export const iconData = {
  "id": "VulvaMagnet",
  "name": "VulvaMagnet",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.53 0 a 7.76 7.76 0 1 0 -15.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 1 10.79 0 a 5.40 5.40 0 1 1 -10.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 12.00 L 21.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 17.14 L 18.55 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.26 L 12.00 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 17.14 L 5.45 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 12.00 L 2.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.86 L 5.45 5.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.74 L 12.00 2.74"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 6.86 L 18.55 5.45"
      }
    ]
  ]
};

export const VulvaMagnet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.53 0 a 7.76 7.76 0 1 0 -15.53 0" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 1 10.79 0 a 5.40 5.40 0 1 1 -10.79 0" />
      <path d="M 19.26 12.00 L 21.26 12.00" />
      <path d="M 17.14 17.14 L 18.55 18.55" />
      <path d="M 12.00 19.26 L 12.00 21.26" />
      <path d="M 6.86 17.14 L 5.45 18.55" />
      <path d="M 4.74 12.00 L 2.74 12.00" />
      <path d="M 6.86 6.86 L 5.45 5.45" />
      <path d="M 12.00 4.74 L 12.00 2.74" />
      <path d="M 17.14 6.86 L 18.55 5.45" />
      {children}
    </svg>
  );
});

export default VulvaMagnet;
