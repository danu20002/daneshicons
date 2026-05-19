import React from 'react';

export const iconData = {
  "id": "VentaglioDam",
  "name": "VentaglioDam",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 12.00 a 7.44 7.44 0 1 0 14.88 0 a 7.44 7.44 0 1 0 -14.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 12.00 L 20.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 15.47 L 19.74 16.47"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 18.01 L 16.47 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.94 L 12.00 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 18.01 L 7.53 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 15.47 L 4.26 16.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 L 3.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 8.53 L 4.26 7.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 5.99 L 7.53 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.06 L 12.00 3.06"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 5.99 L 16.47 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 8.53 L 19.74 7.53"
      }
    ]
  ]
};

export const VentaglioDam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 12.00 a 7.44 7.44 0 1 0 14.88 0 a 7.44 7.44 0 1 0 -14.88 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0" />
      <path d="M 18.94 12.00 L 20.94 12.00" />
      <path d="M 18.01 15.47 L 19.74 16.47" />
      <path d="M 15.47 18.01 L 16.47 19.74" />
      <path d="M 12.00 18.94 L 12.00 20.94" />
      <path d="M 8.53 18.01 L 7.53 19.74" />
      <path d="M 5.99 15.47 L 4.26 16.47" />
      <path d="M 5.06 12.00 L 3.06 12.00" />
      <path d="M 5.99 8.53 L 4.26 7.53" />
      <path d="M 8.53 5.99 L 7.53 4.26" />
      <path d="M 12.00 5.06 L 12.00 3.06" />
      <path d="M 15.47 5.99 L 16.47 4.26" />
      <path d="M 18.01 8.53 L 19.74 7.53" />
      {children}
    </svg>
  );
});

export default VentaglioDam;
