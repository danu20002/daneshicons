import React from 'react';

export const iconData = {
  "id": "MycoFlute",
  "name": "MycoFlute",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 14.25 L 12.49 14.66 L 11.96 12.05 L 10.91 14.73 L 8.27 12.17 L 10.96 10.26 L 10.84 8.31 L 8.19 11.25 L 6.20 13.56 L 5.35 11.22 L 3.12 9.62 L 2.27 7.74 L 1.00 6.43 L 1.00 9.12 L 1.15 7.16 L 3.08 5.36 L 1.00 7.21"
      }
    ]
  ]
};

export const MycoFlute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 14.25 L 12.49 14.66 L 11.96 12.05 L 10.91 14.73 L 8.27 12.17 L 10.96 10.26 L 10.84 8.31 L 8.19 11.25 L 6.20 13.56 L 5.35 11.22 L 3.12 9.62 L 2.27 7.74 L 1.00 6.43 L 1.00 9.12 L 1.15 7.16 L 3.08 5.36 L 1.00 7.21" />
      {children}
    </svg>
  );
});

export default MycoFlute;
