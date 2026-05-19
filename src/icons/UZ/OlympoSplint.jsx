import React from 'react';

export const iconData = {
  "id": "OlympoSplint",
  "name": "OlympoSplint",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 6.67 L 11.69 3.06 L 18.80 6.18 L 20.79 13.69 L 16.16 19.92 L 8.40 20.19 L 3.35 14.29 Z"
      }
    ]
  ]
};

export const OlympoSplint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 6.67 L 11.69 3.06 L 18.80 6.18 L 20.79 13.69 L 16.16 19.92 L 8.40 20.19 L 3.35 14.29 Z" />
      {children}
    </svg>
  );
});

export default OlympoSplint;
