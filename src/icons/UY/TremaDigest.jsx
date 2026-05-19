import React from 'react';

export const iconData = {
  "id": "TremaDigest",
  "name": "TremaDigest",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.82 3.29 L 21.14 13.60 L 6.04 19.11 Z"
      }
    ]
  ]
};

export const TremaDigest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.82 3.29 L 21.14 13.60 L 6.04 19.11 Z" />
      {children}
    </svg>
  );
});

export default TremaDigest;
