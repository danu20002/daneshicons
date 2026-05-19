import React from 'react';

export const iconData = {
  "id": "VegetoExcuse",
  "name": "VegetoExcuse",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.33 11.70 L 5.38 4.95 L 12.30 2.33 L 19.05 5.38 L 21.67 12.30 L 18.62 19.05 L 11.70 21.67 L 4.95 18.62 Z"
      }
    ]
  ]
};

export const VegetoExcuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.33 11.70 L 5.38 4.95 L 12.30 2.33 L 19.05 5.38 L 21.67 12.30 L 18.62 19.05 L 11.70 21.67 L 4.95 18.62 Z" />
      {children}
    </svg>
  );
});

export default VegetoExcuse;
