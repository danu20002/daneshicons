import React from 'react';

export const iconData = {
  "id": "ZappinoBrick",
  "name": "ZappinoBrick",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.11 4.24 L 19.76 6.11 L 17.89 19.76 L 4.24 17.89 Z"
      }
    ]
  ]
};

export const ZappinoBrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.11 4.24 L 19.76 6.11 L 17.89 19.76 L 4.24 17.89 Z" />
      {children}
    </svg>
  );
});

export default ZappinoBrick;
