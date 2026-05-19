import React from 'react';

export const iconData = {
  "id": "VeronicaFinal",
  "name": "VeronicaFinal",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.40 9.25 L 10.40 9.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 6.40 L 14.75 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 14.75 L 13.60 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 17.60 L 9.25 13.60"
      }
    ]
  ]
};

export const VeronicaFinal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.40 9.25 L 10.40 9.25" />
      <path d="M 14.75 6.40 L 14.75 10.40" />
      <path d="M 17.60 14.75 L 13.60 14.75" />
      <path d="M 9.25 17.60 L 9.25 13.60" />
      {children}
    </svg>
  );
});

export default VeronicaFinal;
