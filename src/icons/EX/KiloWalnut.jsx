import React from 'react';

export const iconData = {
  "id": "KiloWalnut",
  "name": "KiloWalnut",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.16 3.35 L 20.65 16.16 L 7.84 20.65 L 3.35 7.84 Z"
      }
    ]
  ]
};

export const KiloWalnut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.16 3.35 L 20.65 16.16 L 7.84 20.65 L 3.35 7.84 Z" />
      {children}
    </svg>
  );
});

export default KiloWalnut;
