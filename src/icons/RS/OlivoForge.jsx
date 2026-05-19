import React from 'react';

export const iconData = {
  "id": "OlivoForge",
  "name": "OlivoForge",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.33 11.99 L 13.33 11.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.18 9.46 L 12.42 13.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 10.44 L 10.93 12.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 13.57 L 10.92 11.22"
      }
    ],
    [
      "path",
      {
        "d": "M 11.17 14.53 L 12.40 10.73"
      }
    ]
  ]
};

export const OlivoForge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.33 11.99 L 13.33 11.99" />
      <path d="M 11.18 9.46 L 12.42 13.27" />
      <path d="M 14.16 10.44 L 10.93 12.79" />
      <path d="M 14.15 13.57 L 10.92 11.22" />
      <path d="M 11.17 14.53 L 12.40 10.73" />
      {children}
    </svg>
  );
});

export default OlivoForge;
