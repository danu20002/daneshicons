import React from 'react';

export const iconData = {
  "id": "SemiMissile",
  "name": "SemiMissile",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 4.52 L 17.06 3.39 L 21.75 14.16 L 12.96 21.94 L 2.84 15.99 Z"
      }
    ]
  ]
};

export const SemiMissile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 4.52 L 17.06 3.39 L 21.75 14.16 L 12.96 21.94 L 2.84 15.99 Z" />
      {children}
    </svg>
  );
});

export default SemiMissile;
