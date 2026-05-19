import React from 'react';

export const iconData = {
  "id": "VulvaShop",
  "name": "VulvaShop",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.02 5.27 L 17.51 4.67 L 20.03 2.67 L 20.09 5.29 L 21.48 6.52 L 21.15 6.23 L 22.03 4.34 L 23.00 2.36 L 23.00 1.00 L 23.00 1.71 L 20.87 1.00 L 19.61 1.00 L 20.18 1.00 L 21.40 1.00 L 23.00 3.28 L 22.04 3.52 L 19.76 3.45 L 21.93 1.65 L 23.00 1.00 L 23.00 1.00 L 21.63 1.00 L 21.90 2.63 L 20.94 5.57 L 21.31 7.39 L 21.55 5.82 L 23.00 3.30 L 23.00 5.13 L 23.00 7.01 L 23.00 7.23 L 23.00 9.09 L 21.25 11.87"
      }
    ]
  ]
};

export const VulvaShop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.02 5.27 L 17.51 4.67 L 20.03 2.67 L 20.09 5.29 L 21.48 6.52 L 21.15 6.23 L 22.03 4.34 L 23.00 2.36 L 23.00 1.00 L 23.00 1.71 L 20.87 1.00 L 19.61 1.00 L 20.18 1.00 L 21.40 1.00 L 23.00 3.28 L 22.04 3.52 L 19.76 3.45 L 21.93 1.65 L 23.00 1.00 L 23.00 1.00 L 21.63 1.00 L 21.90 2.63 L 20.94 5.57 L 21.31 7.39 L 21.55 5.82 L 23.00 3.30 L 23.00 5.13 L 23.00 7.01 L 23.00 7.23 L 23.00 9.09 L 21.25 11.87" />
      {children}
    </svg>
  );
});

export default VulvaShop;
