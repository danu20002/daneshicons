import React from 'react';

export const iconData = {
  "id": "SplenoPizza",
  "name": "SplenoPizza",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 2.16 L 21.84 11.26 L 12.74 21.84 L 2.16 12.74 Z"
      }
    ]
  ]
};

export const SplenoPizza = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 2.16 L 21.84 11.26 L 12.74 21.84 L 2.16 12.74 Z" />
      {children}
    </svg>
  );
});

export default SplenoPizza;
