import React from 'react';

export const iconData = {
  "id": "VerdeNovember",
  "name": "VerdeNovember",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.35 9.33 L 15.13 15.19 L 9.14 22.30 L 7.67 13.12 L 4.51 4.37 L 13.20 7.69 Z"
      }
    ]
  ]
};

export const VerdeNovember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.35 9.33 L 15.13 15.19 L 9.14 22.30 L 7.67 13.12 L 4.51 4.37 L 13.20 7.69 Z" />
      {children}
    </svg>
  );
});

export default VerdeNovember;
