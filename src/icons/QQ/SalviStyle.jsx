import React from 'react';

export const iconData = {
  "id": "SalviStyle",
  "name": "SalviStyle",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.32 19.89 L 11.00 21.46 L 5.15 18.60 L 2.51 12.66 L 4.31 6.40 L 9.70 2.77 L 16.17 3.45 L 20.69 8.13 L 21.14 14.63 Z"
      }
    ]
  ]
};

export const SalviStyle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.32 19.89 L 11.00 21.46 L 5.15 18.60 L 2.51 12.66 L 4.31 6.40 L 9.70 2.77 L 16.17 3.45 L 20.69 8.13 L 21.14 14.63 Z" />
      {children}
    </svg>
  );
});

export default SalviStyle;
