import React from 'react';

export const iconData = {
  "id": "SymbioElect",
  "name": "SymbioElect",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.78 1.27 L 13.94 9.14 L 21.68 7.30 L 15.45 12.25 L 20.91 18.04 L 13.51 15.11 L 11.22 22.73 L 10.06 14.86 L 2.32 16.70 L 8.55 11.75 L 3.09 5.96 L 10.49 8.89 Z"
      }
    ]
  ]
};

export const SymbioElect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.78 1.27 L 13.94 9.14 L 21.68 7.30 L 15.45 12.25 L 20.91 18.04 L 13.51 15.11 L 11.22 22.73 L 10.06 14.86 L 2.32 16.70 L 8.55 11.75 L 3.09 5.96 L 10.49 8.89 Z" />
      {children}
    </svg>
  );
});

export default SymbioElect;
