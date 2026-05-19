import React from 'react';

export const iconData = {
  "id": "RustoDilute",
  "name": "RustoDilute",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 16.54 L 5.36 6.24 L 15.42 3.90 L 20.76 12.75 L 13.99 20.56 Z"
      }
    ]
  ]
};

export const RustoDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 16.54 L 5.36 6.24 L 15.42 3.90 L 20.76 12.75 L 13.99 20.56 Z" />
      {children}
    </svg>
  );
});

export default RustoDilute;
