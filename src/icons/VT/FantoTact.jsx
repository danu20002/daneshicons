import React from 'react';

export const iconData = {
  "id": "FantoTact",
  "name": "FantoTact",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.45 6.13 L 20.71 11.65 L 18.90 17.33 L 13.86 20.52 L 7.95 19.72 L 3.93 15.31 L 3.69 9.35 L 7.34 4.63 L 13.17 3.36 Z"
      }
    ]
  ]
};

export const FantoTact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.45 6.13 L 20.71 11.65 L 18.90 17.33 L 13.86 20.52 L 7.95 19.72 L 3.93 15.31 L 3.69 9.35 L 7.34 4.63 L 13.17 3.36 Z" />
      {children}
    </svg>
  );
});

export default FantoTact;
