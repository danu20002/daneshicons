import React from 'react';

export const iconData = {
  "id": "StructoTropic",
  "name": "StructoTropic",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.91 11.55 L 15.49 21.29 L 4.24 18.19 L 3.72 6.53 L 14.64 2.43 Z"
      }
    ]
  ]
};

export const StructoTropic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.91 11.55 L 15.49 21.29 L 4.24 18.19 L 3.72 6.53 L 14.64 2.43 Z" />
      {children}
    </svg>
  );
});

export default StructoTropic;
