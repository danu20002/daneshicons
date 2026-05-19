import React from 'react';

export const iconData = {
  "id": "PectoPocket",
  "name": "PectoPocket",
  "category": "LU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.65 L 2.50 9.13 L 3.00 10.30 L 3.50 10.88 L 4.00 10.76 L 4.50 9.96 L 5.00 8.66 L 5.50 7.13 L 6.00 5.72 L 6.50 4.73 L 7.00 4.37 L 7.50 4.73 L 8.00 5.72 L 8.50 7.13 L 9.00 8.66 L 9.50 9.96 L 10.00 10.76 L 10.50 10.88 L 11.00 10.30 L 11.50 9.13 L 12.00 7.65 L 12.50 6.16 L 13.00 4.99 L 13.50 4.41 L 14.00 4.53 L 14.50 5.33 L 15.00 6.63 L 15.50 8.16 L 16.00 9.57 L 16.50 10.56 L 17.00 10.92 L 17.50 10.56 L 18.00 9.57 L 18.50 8.16 L 19.00 6.63 L 19.50 5.33 L 20.00 4.53 L 20.50 4.41 L 21.00 4.99 L 21.50 6.16 L 22.00 7.65"
      }
    ]
  ]
};

export const PectoPocket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.65 L 2.50 9.13 L 3.00 10.30 L 3.50 10.88 L 4.00 10.76 L 4.50 9.96 L 5.00 8.66 L 5.50 7.13 L 6.00 5.72 L 6.50 4.73 L 7.00 4.37 L 7.50 4.73 L 8.00 5.72 L 8.50 7.13 L 9.00 8.66 L 9.50 9.96 L 10.00 10.76 L 10.50 10.88 L 11.00 10.30 L 11.50 9.13 L 12.00 7.65 L 12.50 6.16 L 13.00 4.99 L 13.50 4.41 L 14.00 4.53 L 14.50 5.33 L 15.00 6.63 L 15.50 8.16 L 16.00 9.57 L 16.50 10.56 L 17.00 10.92 L 17.50 10.56 L 18.00 9.57 L 18.50 8.16 L 19.00 6.63 L 19.50 5.33 L 20.00 4.53 L 20.50 4.41 L 21.00 4.99 L 21.50 6.16 L 22.00 7.65" />
      {children}
    </svg>
  );
});

export default PectoPocket;
