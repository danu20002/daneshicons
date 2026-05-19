import React from 'react';

export const iconData = {
  "id": "SanguiUrn",
  "name": "SanguiUrn",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 12.00 L 19.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.27 L 12.00 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 6.59 L 17.41 17.41"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 17.41 L 17.41 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 12.00 a 9.27 9.27 0 1 0 18.53 0 a 9.27 9.27 0 1 0 -18.53 0"
      }
    ]
  ]
};

export const SanguiUrn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 12.00 L 19.73 12.00" />
      <path d="M 12.00 4.27 L 12.00 19.73" />
      <path d="M 6.59 6.59 L 17.41 17.41" />
      <path d="M 6.59 17.41 L 17.41 6.59" />
      <path d="M 2.73 12.00 a 9.27 9.27 0 1 0 18.53 0 a 9.27 9.27 0 1 0 -18.53 0" />
      {children}
    </svg>
  );
});

export default SanguiUrn;
