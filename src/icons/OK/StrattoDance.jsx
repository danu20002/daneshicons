import React from 'react';

export const iconData = {
  "id": "StrattoDance",
  "name": "StrattoDance",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 16.80 L 14.56 21.35 L 7.20 20.42 L 2.65 14.56 L 3.58 7.20 L 9.44 2.65 L 16.80 3.58 L 21.35 9.44 Z"
      }
    ]
  ]
};

export const StrattoDance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 16.80 L 14.56 21.35 L 7.20 20.42 L 2.65 14.56 L 3.58 7.20 L 9.44 2.65 L 16.80 3.58 L 21.35 9.44 Z" />
      {children}
    </svg>
  );
});

export default StrattoDance;
