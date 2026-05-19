import React from 'react';

export const iconData = {
  "id": "VongolaMount",
  "name": "VongolaMount",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.13 12.15 L 18.14 6.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 16.17 L 18.95 13.53 L 19.09 10.71 L 7.04 15.54"
      }
    ]
  ]
};

export const VongolaMount = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.13 12.15 L 18.14 6.49" />
      <path d="M 6.21 16.17 L 18.95 13.53 L 19.09 10.71 L 7.04 15.54" />
      {children}
    </svg>
  );
});

export default VongolaMount;
