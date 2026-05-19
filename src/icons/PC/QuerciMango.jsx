import React from 'react';

export const iconData = {
  "id": "QuerciMango",
  "name": "QuerciMango",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.61 20.33 L 3.00 14.79 L 3.67 7.61 L 9.21 3.00 L 16.39 3.67 L 21.00 9.21 L 20.33 16.39 L 14.79 21.00 Z"
      }
    ]
  ]
};

export const QuerciMango = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.61 20.33 L 3.00 14.79 L 3.67 7.61 L 9.21 3.00 L 16.39 3.67 L 21.00 9.21 L 20.33 16.39 L 14.79 21.00 Z" />
      {children}
    </svg>
  );
});

export default QuerciMango;
