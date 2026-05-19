import React from 'react';

export const iconData = {
  "id": "UltraPerfect",
  "name": "UltraPerfect",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.24 19.10 L 3.73 12.12 L 16.03 4.78 Z"
      }
    ]
  ]
};

export const UltraPerfect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.24 19.10 L 3.73 12.12 L 16.03 4.78 Z" />
      {children}
    </svg>
  );
});

export default UltraPerfect;
