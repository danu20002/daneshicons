import React from 'react';

export const iconData = {
  "id": "VolanoDual",
  "name": "VolanoDual",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.41 3.19 L 16.57 9.52 L 22.33 12.28 L 16.43 14.72 L 16.92 21.09 L 11.86 17.20 L 6.59 20.81 L 7.43 14.48 L 1.67 11.72 L 7.57 9.28 L 7.08 2.91 L 12.14 6.80 Z"
      }
    ]
  ]
};

export const VolanoDual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.41 3.19 L 16.57 9.52 L 22.33 12.28 L 16.43 14.72 L 16.92 21.09 L 11.86 17.20 L 6.59 20.81 L 7.43 14.48 L 1.67 11.72 L 7.57 9.28 L 7.08 2.91 L 12.14 6.80 Z" />
      {children}
    </svg>
  );
});

export default VolanoDual;
