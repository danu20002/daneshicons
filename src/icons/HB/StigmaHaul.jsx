import React from 'react';

export const iconData = {
  "id": "StigmaHaul",
  "name": "StigmaHaul",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.47 20.96 L 2.69 12.36 L 8.78 3.26 L 19.32 6.24 L 19.74 17.18 Z"
      }
    ]
  ]
};

export const StigmaHaul = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.47 20.96 L 2.69 12.36 L 8.78 3.26 L 19.32 6.24 L 19.74 17.18 Z" />
      {children}
    </svg>
  );
});

export default StigmaHaul;
