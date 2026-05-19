import React from 'react';

export const iconData = {
  "id": "VezzoRent",
  "name": "VezzoRent",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.85 2.90 L 18.39 5.43 L 21.13 12.90 L 16.99 19.70 L 9.09 20.70 L 3.39 15.15 L 4.17 7.23 Z"
      }
    ]
  ]
};

export const VezzoRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.85 2.90 L 18.39 5.43 L 21.13 12.90 L 16.99 19.70 L 9.09 20.70 L 3.39 15.15 L 4.17 7.23 Z" />
      {children}
    </svg>
  );
});

export default VezzoRent;
