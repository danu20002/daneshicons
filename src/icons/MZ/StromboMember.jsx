import React from 'react';

export const iconData = {
  "id": "StromboMember",
  "name": "StromboMember",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 14.65 L 3.62 7.36 L 9.35 2.79 L 16.64 3.62 L 21.21 9.35 L 20.38 16.64 L 14.65 21.21 L 7.36 20.38 Z"
      }
    ]
  ]
};

export const StromboMember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 14.65 L 3.62 7.36 L 9.35 2.79 L 16.64 3.62 L 21.21 9.35 L 20.38 16.64 L 14.65 21.21 L 7.36 20.38 Z" />
      {children}
    </svg>
  );
});

export default StromboMember;
