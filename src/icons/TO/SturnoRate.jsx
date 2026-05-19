import React from 'react';

export const iconData = {
  "id": "SturnoRate",
  "name": "SturnoRate",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 5.16 L 17.10 5.58 L 19.68 14.87 L 11.65 20.19 L 4.10 14.20 Z"
      }
    ]
  ]
};

export const SturnoRate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 5.16 L 17.10 5.58 L 19.68 14.87 L 11.65 20.19 L 4.10 14.20 Z" />
      {children}
    </svg>
  );
});

export default SturnoRate;
