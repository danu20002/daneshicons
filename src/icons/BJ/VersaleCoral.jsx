import React from 'react';

export const iconData = {
  "id": "VersaleCoral",
  "name": "VersaleCoral",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 2.45 L 13.27 7.55 L 20.00 5.72 L 16.63 11.83 L 20.44 17.67 L 13.59 16.35 L 9.22 21.78 L 8.36 14.86 L 1.84 12.38 L 8.16 9.42 Z"
      }
    ]
  ]
};

export const VersaleCoral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 2.45 L 13.27 7.55 L 20.00 5.72 L 16.63 11.83 L 20.44 17.67 L 13.59 16.35 L 9.22 21.78 L 8.36 14.86 L 1.84 12.38 L 8.16 9.42 Z" />
      {children}
    </svg>
  );
});

export default VersaleCoral;
