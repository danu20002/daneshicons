import React from 'react';

export const iconData = {
  "id": "PremaVigil",
  "name": "PremaVigil",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.16 12.19 L 7.81 9.07 L 8.47 1.75 L 13.50 7.11 L 20.66 5.48 L 17.11 11.91 L 20.88 18.22 L 13.66 16.83 L 8.83 22.37 L 7.92 15.08 Z"
      }
    ]
  ]
};

export const PremaVigil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.16 12.19 L 7.81 9.07 L 8.47 1.75 L 13.50 7.11 L 20.66 5.48 L 17.11 11.91 L 20.88 18.22 L 13.66 16.83 L 8.83 22.37 L 7.92 15.08 Z" />
      {children}
    </svg>
  );
});

export default PremaVigil;
