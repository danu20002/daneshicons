import React from 'react';

export const iconData = {
  "id": "LavaLynx",
  "name": "LavaLynx",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.32 5.81 L 20.84 12.09 L 18.19 18.32 L 11.91 20.84 L 5.68 18.19 L 3.16 11.91 L 5.81 5.68 L 12.09 3.16 Z"
      }
    ]
  ]
};

export const LavaLynx = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.32 5.81 L 20.84 12.09 L 18.19 18.32 L 11.91 20.84 L 5.68 18.19 L 3.16 11.91 L 5.81 5.68 L 12.09 3.16 Z" />
      {children}
    </svg>
  );
});

export default LavaLynx;
