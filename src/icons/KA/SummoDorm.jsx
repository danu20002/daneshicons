import React from 'react';

export const iconData = {
  "id": "SummoDorm",
  "name": "SummoDorm",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 8.87 L 10.32 2.83 L 19.10 5.96 L 20.78 15.13 L 13.68 21.17 L 4.90 18.04 Z"
      }
    ]
  ]
};

export const SummoDorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 8.87 L 10.32 2.83 L 19.10 5.96 L 20.78 15.13 L 13.68 21.17 L 4.90 18.04 Z" />
      {children}
    </svg>
  );
});

export default SummoDorm;
