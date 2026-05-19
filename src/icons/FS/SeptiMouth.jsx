import React from 'react';

export const iconData = {
  "id": "SeptiMouth",
  "name": "SeptiMouth",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.20 22.55 L 8.06 15.39 L 1.45 11.20 L 8.61 8.06 L 12.80 1.45 L 15.94 8.61 L 22.55 12.80 L 15.39 15.94 Z"
      }
    ]
  ]
};

export const SeptiMouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.20 22.55 L 8.06 15.39 L 1.45 11.20 L 8.61 8.06 L 12.80 1.45 L 15.94 8.61 L 22.55 12.80 L 15.39 15.94 Z" />
      {children}
    </svg>
  );
});

export default SeptiMouth;
