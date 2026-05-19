import React from 'react';

export const iconData = {
  "id": "SedimenBreeze",
  "name": "SedimenBreeze",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.92 3.42 L 18.72 6.58 L 20.58 12.92 L 17.42 18.72 L 11.08 20.58 L 5.28 17.42 L 3.42 11.08 L 6.58 5.28 Z"
      }
    ]
  ]
};

export const SedimenBreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.92 3.42 L 18.72 6.58 L 20.58 12.92 L 17.42 18.72 L 11.08 20.58 L 5.28 17.42 L 3.42 11.08 L 6.58 5.28 Z" />
      {children}
    </svg>
  );
});

export default SedimenBreeze;
