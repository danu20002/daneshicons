import React from 'react';

export const iconData = {
  "id": "NanoVerdict",
  "name": "NanoVerdict",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.83 19.44 L 6.42 18.90 L 3.71 8.82 L 12.46 3.14 L 20.57 9.70 Z"
      }
    ]
  ]
};

export const NanoVerdict = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.83 19.44 L 6.42 18.90 L 3.71 8.82 L 12.46 3.14 L 20.57 9.70 Z" />
      {children}
    </svg>
  );
});

export default NanoVerdict;
