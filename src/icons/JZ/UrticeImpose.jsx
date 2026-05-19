import React from 'react';

export const iconData = {
  "id": "UrticeImpose",
  "name": "UrticeImpose",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 16.02 L 3.32 9.01 L 7.98 3.75 L 14.99 3.32 L 20.25 7.98 L 20.68 14.99 L 16.02 20.25 L 9.01 20.68 Z"
      }
    ]
  ]
};

export const UrticeImpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 16.02 L 3.32 9.01 L 7.98 3.75 L 14.99 3.32 L 20.25 7.98 L 20.68 14.99 L 16.02 20.25 L 9.01 20.68 Z" />
      {children}
    </svg>
  );
});

export default UrticeImpose;
