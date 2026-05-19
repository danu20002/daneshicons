import React from 'react';

export const iconData = {
  "id": "PhonoSatire",
  "name": "PhonoSatire",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 14.18 L 5.84 5.69 L 14.38 3.51 L 20.54 9.82 L 18.16 18.31 L 9.62 20.49 Z"
      }
    ]
  ]
};

export const PhonoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 14.18 L 5.84 5.69 L 14.38 3.51 L 20.54 9.82 L 18.16 18.31 L 9.62 20.49 Z" />
      {children}
    </svg>
  );
});

export default PhonoSatire;
