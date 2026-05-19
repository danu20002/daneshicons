import React from 'react';

export const iconData = {
  "id": "VentriloCount",
  "name": "VentriloCount",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.40 19.56 L 6.10 12.87 L 4.44 6.40 L 11.13 6.10 L 17.60 4.44 L 17.90 11.13 L 19.56 17.60 L 12.87 17.90 Z"
      }
    ]
  ]
};

export const VentriloCount = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.40 19.56 L 6.10 12.87 L 4.44 6.40 L 11.13 6.10 L 17.60 4.44 L 17.90 11.13 L 19.56 17.60 L 12.87 17.90 Z" />
      {children}
    </svg>
  );
});

export default VentriloCount;
