import React from 'react';

export const iconData = {
  "id": "IsomeroRheum",
  "name": "IsomeroRheum",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.11 12.00 L 18.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.11 L 12.00 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 7.18 L 16.82 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 16.82 L 16.82 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 1.23 12.00 a 10.77 10.77 0 1 0 21.53 0 a 10.77 10.77 0 1 0 -21.53 0"
      }
    ]
  ]
};

export const IsomeroRheum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.11 12.00 L 18.89 12.00" />
      <path d="M 12.00 5.11 L 12.00 18.89" />
      <path d="M 7.18 7.18 L 16.82 16.82" />
      <path d="M 7.18 16.82 L 16.82 7.18" />
      <path d="M 1.23 12.00 a 10.77 10.77 0 1 0 21.53 0 a 10.77 10.77 0 1 0 -21.53 0" />
      {children}
    </svg>
  );
});

export default IsomeroRheum;
