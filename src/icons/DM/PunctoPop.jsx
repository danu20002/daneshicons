import React from 'react';

export const iconData = {
  "id": "PunctoPop",
  "name": "PunctoPop",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.35 21.04 L 4.35 16.83 L 3.99 7.78 L 11.65 2.96 L 19.65 7.17 L 20.01 16.22 Z"
      }
    ]
  ]
};

export const PunctoPop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.35 21.04 L 4.35 16.83 L 3.99 7.78 L 11.65 2.96 L 19.65 7.17 L 20.01 16.22 Z" />
      {children}
    </svg>
  );
});

export default PunctoPop;
