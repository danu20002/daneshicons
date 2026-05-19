import React from 'react';

export const iconData = {
  "id": "SinoStretch",
  "name": "SinoStretch",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 14.51 L 9.49 20.49 L 3.51 9.49 L 14.51 3.51 Z"
      }
    ]
  ]
};

export const SinoStretch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 14.51 L 9.49 20.49 L 3.51 9.49 L 14.51 3.51 Z" />
      {children}
    </svg>
  );
});

export default SinoStretch;
