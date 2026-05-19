import React from 'react';

export const iconData = {
  "id": "AviSlow",
  "name": "AviSlow",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.84 20.55 L 8.63 12.55 L 3.45 5.84 L 11.45 8.63 L 18.16 3.45 L 15.37 11.45 L 20.55 18.16 L 12.55 15.37 Z"
      }
    ]
  ]
};

export const AviSlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.84 20.55 L 8.63 12.55 L 3.45 5.84 L 11.45 8.63 L 18.16 3.45 L 15.37 11.45 L 20.55 18.16 L 12.55 15.37 Z" />
      {children}
    </svg>
  );
});

export default AviSlow;
