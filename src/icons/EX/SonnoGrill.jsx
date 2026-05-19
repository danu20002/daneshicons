import React from 'react';

export const iconData = {
  "id": "SonnoGrill",
  "name": "SonnoGrill",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 15.43 L 8.57 20.21 L 3.79 8.57 L 15.43 3.79 Z"
      }
    ]
  ]
};

export const SonnoGrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 15.43 L 8.57 20.21 L 3.79 8.57 L 15.43 3.79 Z" />
      {children}
    </svg>
  );
});

export default SonnoGrill;
