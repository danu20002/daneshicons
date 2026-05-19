import React from 'react';

export const iconData = {
  "id": "VisioneSubmit",
  "name": "VisioneSubmit",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.64 5.56 L 21.99 11.97 L 19.67 18.40 L 13.76 21.84 L 7.03 20.67 L 2.62 15.44 L 2.60 8.61 L 6.98 3.36 L 13.71 2.15 Z"
      }
    ]
  ]
};

export const VisioneSubmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.64 5.56 L 21.99 11.97 L 19.67 18.40 L 13.76 21.84 L 7.03 20.67 L 2.62 15.44 L 2.60 8.61 L 6.98 3.36 L 13.71 2.15 Z" />
      {children}
    </svg>
  );
});

export default VisioneSubmit;
