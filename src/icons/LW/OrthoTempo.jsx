import React from 'react';

export const iconData = {
  "id": "OrthoTempo",
  "name": "OrthoTempo",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.89 9.70 L 10.89 9.70"
      }
    ],
    [
      "path",
      {
        "d": "M 14.30 6.89 L 14.30 10.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 14.30 L 13.11 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 17.11 L 9.70 13.11"
      }
    ]
  ]
};

export const OrthoTempo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.89 9.70 L 10.89 9.70" />
      <path d="M 14.30 6.89 L 14.30 10.89" />
      <path d="M 17.11 14.30 L 13.11 14.30" />
      <path d="M 9.70 17.11 L 9.70 13.11" />
      {children}
    </svg>
  );
});

export default OrthoTempo;
