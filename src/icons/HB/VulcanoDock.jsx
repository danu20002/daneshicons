import React from 'react';

export const iconData = {
  "id": "VulcanoDock",
  "name": "VulcanoDock",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 13.62 L 10.38 20.10 L 3.90 10.38 L 13.62 3.90 Z"
      }
    ]
  ]
};

export const VulcanoDock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 13.62 L 10.38 20.10 L 3.90 10.38 L 13.62 3.90 Z" />
      {children}
    </svg>
  );
});

export default VulcanoDock;
