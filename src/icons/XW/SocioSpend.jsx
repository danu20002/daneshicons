import React from 'react';

export const iconData = {
  "id": "SocioSpend",
  "name": "SocioSpend",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.26 21.71 L 3.72 17.08 L 3.46 7.37 L 11.74 2.29 L 20.28 6.92 L 20.54 16.63 Z"
      }
    ]
  ]
};

export const SocioSpend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.26 21.71 L 3.72 17.08 L 3.46 7.37 L 11.74 2.29 L 20.28 6.92 L 20.54 16.63 Z" />
      {children}
    </svg>
  );
});

export default SocioSpend;
