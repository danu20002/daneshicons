import React from 'react';

export const iconData = {
  "id": "RadiciStatus",
  "name": "RadiciStatus",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 17.47 L 13.36 17.59 L 6.53 20.97 L 6.41 13.36 L 3.03 6.53 L 10.64 6.41 L 17.47 3.03 L 17.59 10.64 Z"
      }
    ]
  ]
};

export const RadiciStatus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 17.47 L 13.36 17.59 L 6.53 20.97 L 6.41 13.36 L 3.03 6.53 L 10.64 6.41 L 17.47 3.03 L 17.59 10.64 Z" />
      {children}
    </svg>
  );
});

export default RadiciStatus;
