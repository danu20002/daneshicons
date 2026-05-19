import React from 'react';

export const iconData = {
  "id": "VinovoSlow",
  "name": "VinovoSlow",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.48 9.18 L 19.20 5.16 L 14.32 21.65 Z"
      }
    ]
  ]
};

export const VinovoSlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.48 9.18 L 19.20 5.16 L 14.32 21.65 Z" />
      {children}
    </svg>
  );
});

export default VinovoSlow;
