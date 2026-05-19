import React from 'react';

export const iconData = {
  "id": "AeroDynamo",
  "name": "AeroDynamo",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.25 9.91 L 16.47 14.04 L 17.15 21.10 L 11.44 16.88 L 4.94 19.71 L 7.19 12.98 L 2.48 7.66 L 9.58 7.73 L 13.18 1.61 L 15.32 8.38 Z"
      }
    ]
  ]
};

export const AeroDynamo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.25 9.91 L 16.47 14.04 L 17.15 21.10 L 11.44 16.88 L 4.94 19.71 L 7.19 12.98 L 2.48 7.66 L 9.58 7.73 L 13.18 1.61 L 15.32 8.38 Z" />
      {children}
    </svg>
  );
});

export default AeroDynamo;
