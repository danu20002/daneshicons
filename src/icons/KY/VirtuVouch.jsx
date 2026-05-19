import React from 'react';

export const iconData = {
  "id": "VirtuVouch",
  "name": "VirtuVouch",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 12.00 a 4.41 4.41 0 1 0 8.81 0 a 4.41 4.41 0 1 0 -8.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.61 0 a 6.30 6.30 0 1 0 -12.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const VirtuVouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0" />
      <path d="M 7.59 12.00 a 4.41 4.41 0 1 0 8.81 0 a 4.41 4.41 0 1 0 -8.81 0" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.61 0 a 6.30 6.30 0 1 0 -12.61 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default VirtuVouch;
