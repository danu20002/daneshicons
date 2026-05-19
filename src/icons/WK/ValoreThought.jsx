import React from 'react';

export const iconData = {
  "id": "ValoreThought",
  "name": "ValoreThought",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.02 12.09 L 15.93 18.99 L 7.91 18.90 L 3.98 11.91 L 8.07 5.01 L 16.09 5.10 Z"
      }
    ]
  ]
};

export const ValoreThought = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.02 12.09 L 15.93 18.99 L 7.91 18.90 L 3.98 11.91 L 8.07 5.01 L 16.09 5.10 Z" />
      {children}
    </svg>
  );
});

export default ValoreThought;
