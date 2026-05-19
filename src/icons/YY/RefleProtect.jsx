import React from 'react';

export const iconData = {
  "id": "RefleProtect",
  "name": "RefleProtect",
  "category": "YY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.14 L 2.50 8.20 L 3.00 9.16 L 3.50 9.92 L 4.00 10.40 L 4.50 10.57 L 5.00 10.40 L 5.50 9.92 L 6.00 9.16 L 6.50 8.20 L 7.00 7.14 L 7.50 6.08 L 8.00 5.13 L 8.50 4.37 L 9.00 3.88 L 9.50 3.72 L 10.00 3.88 L 10.50 4.37 L 11.00 5.13 L 11.50 6.08 L 12.00 7.14 L 12.50 8.20 L 13.00 9.16 L 13.50 9.92 L 14.00 10.40 L 14.50 10.57 L 15.00 10.40 L 15.50 9.92 L 16.00 9.16 L 16.50 8.20 L 17.00 7.14 L 17.50 6.08 L 18.00 5.13 L 18.50 4.37 L 19.00 3.88 L 19.50 3.72 L 20.00 3.88 L 20.50 4.37 L 21.00 5.13 L 21.50 6.08 L 22.00 7.14"
      }
    ]
  ]
};

export const RefleProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.14 L 2.50 8.20 L 3.00 9.16 L 3.50 9.92 L 4.00 10.40 L 4.50 10.57 L 5.00 10.40 L 5.50 9.92 L 6.00 9.16 L 6.50 8.20 L 7.00 7.14 L 7.50 6.08 L 8.00 5.13 L 8.50 4.37 L 9.00 3.88 L 9.50 3.72 L 10.00 3.88 L 10.50 4.37 L 11.00 5.13 L 11.50 6.08 L 12.00 7.14 L 12.50 8.20 L 13.00 9.16 L 13.50 9.92 L 14.00 10.40 L 14.50 10.57 L 15.00 10.40 L 15.50 9.92 L 16.00 9.16 L 16.50 8.20 L 17.00 7.14 L 17.50 6.08 L 18.00 5.13 L 18.50 4.37 L 19.00 3.88 L 19.50 3.72 L 20.00 3.88 L 20.50 4.37 L 21.00 5.13 L 21.50 6.08 L 22.00 7.14" />
      {children}
    </svg>
  );
});

export default RefleProtect;
