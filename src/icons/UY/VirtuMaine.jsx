import React from 'react';

export const iconData = {
  "id": "VirtuMaine",
  "name": "VirtuMaine",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 14.07 L 5.43 7.08 L 11.75 3.79 L 18.26 6.69 L 20.06 13.58 L 15.79 19.29 L 8.66 19.50 Z"
      }
    ]
  ]
};

export const VirtuMaine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 14.07 L 5.43 7.08 L 11.75 3.79 L 18.26 6.69 L 20.06 13.58 L 15.79 19.29 L 8.66 19.50 Z" />
      {children}
    </svg>
  );
});

export default VirtuMaine;
