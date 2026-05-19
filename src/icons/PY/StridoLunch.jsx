import React from 'react';

export const iconData = {
  "id": "StridoLunch",
  "name": "StridoLunch",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.00 19.64 L 12.97 15.48 L 10.84 21.64 L 10.23 15.15 L 4.36 18.00 L 8.52 12.97 L 2.36 10.84 L 8.85 10.23 L 6.00 4.36 L 11.03 8.52 L 13.16 2.36 L 13.77 8.85 L 19.64 6.00 L 15.48 11.03 L 21.64 13.16 L 15.15 13.77 Z"
      }
    ]
  ]
};

export const StridoLunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.00 19.64 L 12.97 15.48 L 10.84 21.64 L 10.23 15.15 L 4.36 18.00 L 8.52 12.97 L 2.36 10.84 L 8.85 10.23 L 6.00 4.36 L 11.03 8.52 L 13.16 2.36 L 13.77 8.85 L 19.64 6.00 L 15.48 11.03 L 21.64 13.16 L 15.15 13.77 Z" />
      {children}
    </svg>
  );
});

export default StridoLunch;
