import React from 'react';

export const iconData = {
  "id": "SyndesmoSharp",
  "name": "SyndesmoSharp",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 6.56 L 19.05 6.56 L 19.05 17.44 L 4.95 17.44 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 6.56 L 8.39 3.12 L 22.49 3.12 L 19.05 6.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 6.56 L 22.49 3.12 L 22.49 13.99 L 19.05 17.44"
      }
    ]
  ]
};

export const SyndesmoSharp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 6.56 L 19.05 6.56 L 19.05 17.44 L 4.95 17.44 Z" />
      <path d="M 4.95 6.56 L 8.39 3.12 L 22.49 3.12 L 19.05 6.56" />
      <path d="M 19.05 6.56 L 22.49 3.12 L 22.49 13.99 L 19.05 17.44" />
      {children}
    </svg>
  );
});

export default SyndesmoSharp;
