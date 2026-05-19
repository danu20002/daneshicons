import React from 'react';

export const iconData = {
  "id": "GigaGun",
  "name": "GigaGun",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.99 10.67 L 16.00 14.97 L 13.33 20.99 L 9.03 16.00 L 3.01 13.33 L 8.00 9.03 L 10.67 3.01 L 14.97 8.00 Z"
      }
    ]
  ]
};

export const GigaGun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.99 10.67 L 16.00 14.97 L 13.33 20.99 L 9.03 16.00 L 3.01 13.33 L 8.00 9.03 L 10.67 3.01 L 14.97 8.00 Z" />
      {children}
    </svg>
  );
});

export default GigaGun;
