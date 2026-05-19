import React from 'react';

export const iconData = {
  "id": "QuasiSalon",
  "name": "QuasiSalon",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 16.94 L 7.06 4.03 L 19.97 7.06 L 16.94 19.97 Z"
      }
    ]
  ]
};

export const QuasiSalon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 16.94 L 7.06 4.03 L 19.97 7.06 L 16.94 19.97 Z" />
      {children}
    </svg>
  );
});

export default QuasiSalon;
