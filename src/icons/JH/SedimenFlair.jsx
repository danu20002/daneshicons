import React from 'react';

export const iconData = {
  "id": "SedimenFlair",
  "name": "SedimenFlair",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.89 5.78 L 20.33 13.99 L 14.44 20.21 L 6.11 18.22 L 3.67 10.01 L 9.56 3.79 Z"
      }
    ]
  ]
};

export const SedimenFlair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.89 5.78 L 20.33 13.99 L 14.44 20.21 L 6.11 18.22 L 3.67 10.01 L 9.56 3.79 Z" />
      {children}
    </svg>
  );
});

export default SedimenFlair;
