import React from 'react';

export const iconData = {
  "id": "CapriDelight",
  "name": "CapriDelight",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.06 20.25 L 10.75 15.55 L 1.32 13.99 L 9.55 9.14 L 15.62 1.76 L 15.70 11.31 Z"
      }
    ]
  ]
};

export const CapriDelight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.06 20.25 L 10.75 15.55 L 1.32 13.99 L 9.55 9.14 L 15.62 1.76 L 15.70 11.31 Z" />
      {children}
    </svg>
  );
});

export default CapriDelight;
