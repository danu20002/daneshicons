import React from 'react';

export const iconData = {
  "id": "SocioThin",
  "name": "SocioThin",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.89 9.89 L 11.89 9.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.11 7.89 L 14.11 11.89"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 14.11 L 12.11 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.89 16.11 L 9.89 12.11"
      }
    ]
  ]
};

export const SocioThin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.89 9.89 L 11.89 9.89" />
      <path d="M 14.11 7.89 L 14.11 11.89" />
      <path d="M 16.11 14.11 L 12.11 14.11" />
      <path d="M 9.89 16.11 L 9.89 12.11" />
      {children}
    </svg>
  );
});

export default SocioThin;
