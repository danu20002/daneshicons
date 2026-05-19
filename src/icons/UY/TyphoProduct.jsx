import React from 'react';

export const iconData = {
  "id": "TyphoProduct",
  "name": "TyphoProduct",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 3.33 L 16.20 3.35 L 21.38 9.89 L 19.50 18.01 L 11.97 21.61 L 4.47 17.97 L 2.63 9.83 Z"
      }
    ]
  ]
};

export const TyphoProduct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 3.33 L 16.20 3.35 L 21.38 9.89 L 19.50 18.01 L 11.97 21.61 L 4.47 17.97 L 2.63 9.83 Z" />
      {children}
    </svg>
  );
});

export default TyphoProduct;
