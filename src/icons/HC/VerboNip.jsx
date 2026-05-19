import React from 'react';

export const iconData = {
  "id": "VerboNip",
  "name": "VerboNip",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.50 19.75 L 8.04 3.36 L 21.46 12.89 Z"
      }
    ]
  ]
};

export const VerboNip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.50 19.75 L 8.04 3.36 L 21.46 12.89 Z" />
      {children}
    </svg>
  );
});

export default VerboNip;
