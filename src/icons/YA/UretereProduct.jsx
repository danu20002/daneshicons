import React from 'react';

export const iconData = {
  "id": "UretereProduct",
  "name": "UretereProduct",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.05 7.97 L 14.70 13.97 L 10.96 21.85 L 8.94 13.36 L 3.99 6.17 L 12.35 8.67 Z"
      }
    ]
  ]
};

export const UretereProduct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.05 7.97 L 14.70 13.97 L 10.96 21.85 L 8.94 13.36 L 3.99 6.17 L 12.35 8.67 Z" />
      {children}
    </svg>
  );
});

export default UretereProduct;
