import React from 'react';

export const iconData = {
  "id": "ZefiroHarsh",
  "name": "ZefiroHarsh",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 5.64 L 19.76 5.64 L 19.76 18.36 L 4.24 18.36 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 5.64 L 8.02 1.85 L 23.55 1.85 L 19.76 5.64"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 5.64 L 23.55 1.85 L 23.55 14.57 L 19.76 18.36"
      }
    ]
  ]
};

export const ZefiroHarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 5.64 L 19.76 5.64 L 19.76 18.36 L 4.24 18.36 Z" />
      <path d="M 4.24 5.64 L 8.02 1.85 L 23.55 1.85 L 19.76 5.64" />
      <path d="M 19.76 5.64 L 23.55 1.85 L 23.55 14.57 L 19.76 18.36" />
      {children}
    </svg>
  );
});

export default ZefiroHarsh;
