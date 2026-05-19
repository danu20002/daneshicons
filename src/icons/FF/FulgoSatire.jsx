import React from 'react';

export const iconData = {
  "id": "FulgoSatire",
  "name": "FulgoSatire",
  "category": "FF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.23 L 2.50 9.78 L 3.00 11.77 L 3.50 12.77 L 4.00 12.57 L 4.50 11.20 L 5.00 8.97 L 5.50 6.36 L 6.00 3.94 L 6.50 2.24 L 7.00 1.63 L 7.50 2.24 L 8.00 3.94 L 8.50 6.36 L 9.00 8.97 L 9.50 11.20 L 10.00 12.57 L 10.50 12.77 L 11.00 11.77 L 11.50 9.78 L 12.00 7.23 L 12.50 4.69 L 13.00 2.70 L 13.50 1.70 L 14.00 1.90 L 14.50 3.27 L 15.00 5.50 L 15.50 8.11 L 16.00 10.53 L 16.50 12.23 L 17.00 12.84 L 17.50 12.23 L 18.00 10.53 L 18.50 8.11 L 19.00 5.50 L 19.50 3.27 L 20.00 1.90 L 20.50 1.70 L 21.00 2.70 L 21.50 4.69 L 22.00 7.23"
      }
    ]
  ]
};

export const FulgoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.23 L 2.50 9.78 L 3.00 11.77 L 3.50 12.77 L 4.00 12.57 L 4.50 11.20 L 5.00 8.97 L 5.50 6.36 L 6.00 3.94 L 6.50 2.24 L 7.00 1.63 L 7.50 2.24 L 8.00 3.94 L 8.50 6.36 L 9.00 8.97 L 9.50 11.20 L 10.00 12.57 L 10.50 12.77 L 11.00 11.77 L 11.50 9.78 L 12.00 7.23 L 12.50 4.69 L 13.00 2.70 L 13.50 1.70 L 14.00 1.90 L 14.50 3.27 L 15.00 5.50 L 15.50 8.11 L 16.00 10.53 L 16.50 12.23 L 17.00 12.84 L 17.50 12.23 L 18.00 10.53 L 18.50 8.11 L 19.00 5.50 L 19.50 3.27 L 20.00 1.90 L 20.50 1.70 L 21.00 2.70 L 21.50 4.69 L 22.00 7.23" />
      {children}
    </svg>
  );
});

export default FulgoSatire;
