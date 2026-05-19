import React from 'react';

export const iconData = {
  "id": "VulvaPriest",
  "name": "VulvaPriest",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.95 18.49 L 5.51 17.95 L 6.05 5.51 L 18.49 6.05 Z"
      }
    ]
  ]
};

export const VulvaPriest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.95 18.49 L 5.51 17.95 L 6.05 5.51 L 18.49 6.05 Z" />
      {children}
    </svg>
  );
});

export default VulvaPriest;
