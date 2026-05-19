import React from 'react';

export const iconData = {
  "id": "GamaHurt",
  "name": "GamaHurt",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 8.88 L 10.09 8.18 L 15.12 2.63 L 15.82 10.09 L 21.37 15.12 L 13.91 15.82 L 8.88 21.37 L 8.18 13.91 Z"
      }
    ]
  ]
};

export const GamaHurt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 8.88 L 10.09 8.18 L 15.12 2.63 L 15.82 10.09 L 21.37 15.12 L 13.91 15.82 L 8.88 21.37 L 8.18 13.91 Z" />
      {children}
    </svg>
  );
});

export default GamaHurt;
