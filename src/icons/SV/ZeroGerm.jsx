import React from 'react';

export const iconData = {
  "id": "ZeroGerm",
  "name": "ZeroGerm",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.93 19.45 L 9.46 19.59 L 5.18 16.18 L 4.09 10.82 L 6.70 6.01 L 11.79 4.00 L 16.98 5.74 L 19.84 10.41 L 19.03 15.82 Z"
      }
    ]
  ]
};

export const ZeroGerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.93 19.45 L 9.46 19.59 L 5.18 16.18 L 4.09 10.82 L 6.70 6.01 L 11.79 4.00 L 16.98 5.74 L 19.84 10.41 L 19.03 15.82 Z" />
      {children}
    </svg>
  );
});

export default ZeroGerm;
