import React from 'react';

export const iconData = {
  "id": "SpondylGlide",
  "name": "SpondylGlide",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.40 21.06 L 4.36 16.88 L 3.96 7.82 L 11.60 2.94 L 19.64 7.12 L 20.04 16.18 Z"
      }
    ]
  ]
};

export const SpondylGlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.40 21.06 L 4.36 16.88 L 3.96 7.82 L 11.60 2.94 L 19.64 7.12 L 20.04 16.18 Z" />
      {children}
    </svg>
  );
});

export default SpondylGlide;
