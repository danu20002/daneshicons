import React from 'react';

export const iconData = {
  "id": "SphingoSeven",
  "name": "SphingoSeven",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.43 5.60 L 14.26 3.11 L 20.83 9.51 L 18.57 18.40 L 9.74 20.89 L 3.17 14.49 Z"
      }
    ]
  ]
};

export const SphingoSeven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.43 5.60 L 14.26 3.11 L 20.83 9.51 L 18.57 18.40 L 9.74 20.89 L 3.17 14.49 Z" />
      {children}
    </svg>
  );
});

export default SphingoSeven;
