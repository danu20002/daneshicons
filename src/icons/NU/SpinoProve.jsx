import React from 'react';

export const iconData = {
  "id": "SpinoProve",
  "name": "SpinoProve",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.54 22.66 L 8.88 15.45 L 1.34 12.54 L 8.55 8.88 L 11.46 1.34 L 15.12 8.55 L 22.66 11.46 L 15.45 15.12 Z"
      }
    ]
  ]
};

export const SpinoProve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.54 22.66 L 8.88 15.45 L 1.34 12.54 L 8.55 8.88 L 11.46 1.34 L 15.12 8.55 L 22.66 11.46 L 15.45 15.12 Z" />
      {children}
    </svg>
  );
});

export default SpinoProve;
