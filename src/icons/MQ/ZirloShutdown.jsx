import React from 'react';

export const iconData = {
  "id": "ZirloShutdown",
  "name": "ZirloShutdown",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 3.74 L 5.62 11.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 12.27 L 10.48 8.55 L 9.84 7.23 L 18.41 2.21 L 7.12 13.35 L 17.47 21.87 L 20.90 17.01"
      }
    ]
  ]
};

export const ZirloShutdown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 3.74 L 5.62 11.53" />
      <path d="M 19.12 12.27 L 10.48 8.55 L 9.84 7.23 L 18.41 2.21 L 7.12 13.35 L 17.47 21.87 L 20.90 17.01" />
      {children}
    </svg>
  );
});

export default ZirloShutdown;
