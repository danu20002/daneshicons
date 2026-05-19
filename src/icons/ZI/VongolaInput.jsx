import React from 'react';

export const iconData = {
  "id": "VongolaInput",
  "name": "VongolaInput",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 21.34 L 2.86 14.85 L 4.96 5.51 L 14.10 2.66 L 21.14 9.15 L 19.04 18.49 Z"
      }
    ]
  ]
};

export const VongolaInput = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 21.34 L 2.86 14.85 L 4.96 5.51 L 14.10 2.66 L 21.14 9.15 L 19.04 18.49 Z" />
      {children}
    </svg>
  );
});

export default VongolaInput;
