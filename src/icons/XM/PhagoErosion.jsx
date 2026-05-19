import React from 'react';

export const iconData = {
  "id": "PhagoErosion",
  "name": "PhagoErosion",
  "category": "XM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.13 L 2.50 8.50 L 3.00 9.56 L 3.50 10.10 L 4.00 9.99 L 4.50 9.26 L 5.00 8.06 L 5.50 6.66 L 6.00 5.36 L 6.50 4.45 L 7.00 4.12 L 7.50 4.45 L 8.00 5.36 L 8.50 6.66 L 9.00 8.06 L 9.50 9.26 L 10.00 9.99 L 10.50 10.10 L 11.00 9.56 L 11.50 8.50 L 12.00 7.13 L 12.50 5.76 L 13.00 4.70 L 13.50 4.16 L 14.00 4.27 L 14.50 5.00 L 15.00 6.20 L 15.50 7.60 L 16.00 8.90 L 16.50 9.81 L 17.00 10.14 L 17.50 9.81 L 18.00 8.90 L 18.50 7.60 L 19.00 6.20 L 19.50 5.00 L 20.00 4.27 L 20.50 4.16 L 21.00 4.70 L 21.50 5.76 L 22.00 7.13"
      }
    ]
  ]
};

export const PhagoErosion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.13 L 2.50 8.50 L 3.00 9.56 L 3.50 10.10 L 4.00 9.99 L 4.50 9.26 L 5.00 8.06 L 5.50 6.66 L 6.00 5.36 L 6.50 4.45 L 7.00 4.12 L 7.50 4.45 L 8.00 5.36 L 8.50 6.66 L 9.00 8.06 L 9.50 9.26 L 10.00 9.99 L 10.50 10.10 L 11.00 9.56 L 11.50 8.50 L 12.00 7.13 L 12.50 5.76 L 13.00 4.70 L 13.50 4.16 L 14.00 4.27 L 14.50 5.00 L 15.00 6.20 L 15.50 7.60 L 16.00 8.90 L 16.50 9.81 L 17.00 10.14 L 17.50 9.81 L 18.00 8.90 L 18.50 7.60 L 19.00 6.20 L 19.50 5.00 L 20.00 4.27 L 20.50 4.16 L 21.00 4.70 L 21.50 5.76 L 22.00 7.13" />
      {children}
    </svg>
  );
});

export default PhagoErosion;
