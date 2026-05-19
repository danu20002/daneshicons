import React from 'react';

export const iconData = {
  "id": "LevoRelief",
  "name": "LevoRelief",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 20.79 L 7.72 14.55 L 1.15 13.58 L 7.17 10.78 L 3.21 5.44 L 9.45 7.72 L 10.42 1.15 L 13.22 7.17 L 18.56 3.21 L 16.28 9.45 L 22.85 10.42 L 16.83 13.22 L 20.79 18.56 L 14.55 16.28 L 13.58 22.85 L 10.78 16.83 Z"
      }
    ]
  ]
};

export const LevoRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 20.79 L 7.72 14.55 L 1.15 13.58 L 7.17 10.78 L 3.21 5.44 L 9.45 7.72 L 10.42 1.15 L 13.22 7.17 L 18.56 3.21 L 16.28 9.45 L 22.85 10.42 L 16.83 13.22 L 20.79 18.56 L 14.55 16.28 L 13.58 22.85 L 10.78 16.83 Z" />
      {children}
    </svg>
  );
});

export default LevoRelief;
