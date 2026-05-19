import React from 'react';

export const iconData = {
  "id": "OpticMuseum",
  "name": "OpticMuseum",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.64 16.04 L 12.32 20.64 L 4.68 16.60 L 4.36 7.96 L 11.68 3.36 L 19.32 7.40 Z"
      }
    ]
  ]
};

export const OpticMuseum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.64 16.04 L 12.32 20.64 L 4.68 16.60 L 4.36 7.96 L 11.68 3.36 L 19.32 7.40 Z" />
      {children}
    </svg>
  );
});

export default OpticMuseum;
