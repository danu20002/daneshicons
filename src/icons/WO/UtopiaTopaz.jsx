import React from 'react';

export const iconData = {
  "id": "UtopiaTopaz",
  "name": "UtopiaTopaz",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.39 10.99 L 9.85 7.29 L 18.18 3.31 L 17.15 12.49 L 16.43 21.70 L 9.00 16.22 Z"
      }
    ]
  ]
};

export const UtopiaTopaz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.39 10.99 L 9.85 7.29 L 18.18 3.31 L 17.15 12.49 L 16.43 21.70 L 9.00 16.22 Z" />
      {children}
    </svg>
  );
});

export default UtopiaTopaz;
