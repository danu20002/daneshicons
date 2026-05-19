import React from 'react';

export const iconData = {
  "id": "YawnSnob",
  "name": "YawnSnob",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.36 16.04 L 14.35 20.06 L 7.96 19.36 L 3.94 14.35 L 4.64 7.96 L 9.65 3.94 L 16.04 4.64 L 20.06 9.65 Z"
      }
    ]
  ]
};

export const YawnSnob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.36 16.04 L 14.35 20.06 L 7.96 19.36 L 3.94 14.35 L 4.64 7.96 L 9.65 3.94 L 16.04 4.64 L 20.06 9.65 Z" />
      {children}
    </svg>
  );
});

export default YawnSnob;
