import React from 'react';

export const iconData = {
  "id": "SaturMurmur",
  "name": "SaturMurmur",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 12.00 L 19.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.41 L 12.00 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 6.69 L 17.31 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 17.31 L 17.31 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 1.97 12.00 a 10.03 10.03 0 1 0 20.05 0 a 10.03 10.03 0 1 0 -20.05 0"
      }
    ]
  ]
};

export const SaturMurmur = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 12.00 L 19.59 12.00" />
      <path d="M 12.00 4.41 L 12.00 19.59" />
      <path d="M 6.69 6.69 L 17.31 17.31" />
      <path d="M 6.69 17.31 L 17.31 6.69" />
      <path d="M 1.97 12.00 a 10.03 10.03 0 1 0 20.05 0 a 10.03 10.03 0 1 0 -20.05 0" />
      {children}
    </svg>
  );
});

export default SaturMurmur;
