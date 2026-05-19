import React from 'react';

export const iconData = {
  "id": "TragicoPioneer",
  "name": "TragicoPioneer",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.47 11.18 L 15.47 11.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.98 11.95 L 10.98 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 11.56 12.87 L 9.56 9.41"
      }
    ]
  ]
};

export const TragicoPioneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.47 11.18 L 15.47 11.18" />
      <path d="M 12.98 11.95 L 10.98 15.41" />
      <path d="M 11.56 12.87 L 9.56 9.41" />
      {children}
    </svg>
  );
});

export default TragicoPioneer;
