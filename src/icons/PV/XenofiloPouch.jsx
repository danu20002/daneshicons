import React from 'react';

export const iconData = {
  "id": "XenofiloPouch",
  "name": "XenofiloPouch",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.53 9.16 L 7.31 3.30 L 14.84 2.53 L 20.70 7.31 L 21.47 14.84 L 16.69 20.70 L 9.16 21.47 L 3.30 16.69 Z"
      }
    ]
  ]
};

export const XenofiloPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.53 9.16 L 7.31 3.30 L 14.84 2.53 L 20.70 7.31 L 21.47 14.84 L 16.69 20.70 L 9.16 21.47 L 3.30 16.69 Z" />
      {children}
    </svg>
  );
});

export default XenofiloPouch;
