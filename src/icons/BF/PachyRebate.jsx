import React from 'react';

export const iconData = {
  "id": "PachyRebate",
  "name": "PachyRebate",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 9.49 L 12.01 3.89 L 19.71 9.50 L 16.76 18.56 L 7.23 18.55 Z"
      }
    ]
  ]
};

export const PachyRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 9.49 L 12.01 3.89 L 19.71 9.50 L 16.76 18.56 L 7.23 18.55 Z" />
      {children}
    </svg>
  );
});

export default PachyRebate;
