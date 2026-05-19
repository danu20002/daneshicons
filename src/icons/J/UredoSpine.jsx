import React from 'react';

export const iconData = {
  "id": "UredoSpine",
  "name": "UredoSpine",
  "category": "J",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.16 L 2.50 9.11 L 3.00 10.64 L 3.50 11.41 L 4.00 11.25 L 4.50 10.20 L 5.00 8.49 L 5.50 6.49 L 6.00 4.64 L 6.50 3.34 L 7.00 2.87 L 7.50 3.34 L 8.00 4.64 L 8.50 6.49 L 9.00 8.49 L 9.50 10.20 L 10.00 11.25 L 10.50 11.41 L 11.00 10.64 L 11.50 9.11 L 12.00 7.16 L 12.50 5.21 L 13.00 3.69 L 13.50 2.92 L 14.00 3.08 L 14.50 4.13 L 15.00 5.84 L 15.50 7.84 L 16.00 9.69 L 16.50 10.99 L 17.00 11.46 L 17.50 10.99 L 18.00 9.69 L 18.50 7.84 L 19.00 5.84 L 19.50 4.13 L 20.00 3.08 L 20.50 2.92 L 21.00 3.69 L 21.50 5.21 L 22.00 7.16"
      }
    ]
  ]
};

export const UredoSpine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.16 L 2.50 9.11 L 3.00 10.64 L 3.50 11.41 L 4.00 11.25 L 4.50 10.20 L 5.00 8.49 L 5.50 6.49 L 6.00 4.64 L 6.50 3.34 L 7.00 2.87 L 7.50 3.34 L 8.00 4.64 L 8.50 6.49 L 9.00 8.49 L 9.50 10.20 L 10.00 11.25 L 10.50 11.41 L 11.00 10.64 L 11.50 9.11 L 12.00 7.16 L 12.50 5.21 L 13.00 3.69 L 13.50 2.92 L 14.00 3.08 L 14.50 4.13 L 15.00 5.84 L 15.50 7.84 L 16.00 9.69 L 16.50 10.99 L 17.00 11.46 L 17.50 10.99 L 18.00 9.69 L 18.50 7.84 L 19.00 5.84 L 19.50 4.13 L 20.00 3.08 L 20.50 2.92 L 21.00 3.69 L 21.50 5.21 L 22.00 7.16" />
      {children}
    </svg>
  );
});

export default UredoSpine;
