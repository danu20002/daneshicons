import React from 'react';

export const iconData = {
  "id": "VitelloOffset",
  "name": "VitelloOffset",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.34 17.14 L 20.12 16.81 L 22.09 16.87 L 20.85 16.58 L 20.92 17.54 L 18.26 19.84 L 18.03 22.12 L 19.29 23.00 L 17.85 23.00 L 18.08 21.09 L 17.61 22.59 L 19.59 23.00 L 17.44 21.48 L 19.49 21.65 L 17.64 19.80 L 14.83 18.36 L 17.81 17.98 L 15.19 20.29"
      }
    ]
  ]
};

export const VitelloOffset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.34 17.14 L 20.12 16.81 L 22.09 16.87 L 20.85 16.58 L 20.92 17.54 L 18.26 19.84 L 18.03 22.12 L 19.29 23.00 L 17.85 23.00 L 18.08 21.09 L 17.61 22.59 L 19.59 23.00 L 17.44 21.48 L 19.49 21.65 L 17.64 19.80 L 14.83 18.36 L 17.81 17.98 L 15.19 20.29" />
      {children}
    </svg>
  );
});

export default VitelloOffset;
