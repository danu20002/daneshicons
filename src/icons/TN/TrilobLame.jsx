import React from 'react';

export const iconData = {
  "id": "TrilobLame",
  "name": "TrilobLame",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.12 L 11.88 3.73 L 20.27 11.88 L 12.12 20.27 Z"
      }
    ]
  ]
};

export const TrilobLame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.12 L 11.88 3.73 L 20.27 11.88 L 12.12 20.27 Z" />
      {children}
    </svg>
  );
});

export default TrilobLame;
