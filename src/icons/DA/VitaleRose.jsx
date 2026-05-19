import React from 'react';

export const iconData = {
  "id": "VitaleRose",
  "name": "VitaleRose",
  "category": "DA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.28 L 2.50 8.25 L 3.00 10.03 L 3.50 11.44 L 4.00 12.34 L 4.50 12.65 L 5.00 12.34 L 5.50 11.44 L 6.00 10.03 L 6.50 8.25 L 7.00 6.28 L 7.50 4.31 L 8.00 2.53 L 8.50 1.13 L 9.00 0.22 L 9.50 -0.09 L 10.00 0.22 L 10.50 1.13 L 11.00 2.53 L 11.50 4.31 L 12.00 6.28 L 12.50 8.25 L 13.00 10.03 L 13.50 11.44 L 14.00 12.34 L 14.50 12.65 L 15.00 12.34 L 15.50 11.44 L 16.00 10.03 L 16.50 8.25 L 17.00 6.28 L 17.50 4.31 L 18.00 2.53 L 18.50 1.13 L 19.00 0.22 L 19.50 -0.09 L 20.00 0.22 L 20.50 1.13 L 21.00 2.53 L 21.50 4.31 L 22.00 6.28"
      }
    ]
  ]
};

export const VitaleRose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.28 L 2.50 8.25 L 3.00 10.03 L 3.50 11.44 L 4.00 12.34 L 4.50 12.65 L 5.00 12.34 L 5.50 11.44 L 6.00 10.03 L 6.50 8.25 L 7.00 6.28 L 7.50 4.31 L 8.00 2.53 L 8.50 1.13 L 9.00 0.22 L 9.50 -0.09 L 10.00 0.22 L 10.50 1.13 L 11.00 2.53 L 11.50 4.31 L 12.00 6.28 L 12.50 8.25 L 13.00 10.03 L 13.50 11.44 L 14.00 12.34 L 14.50 12.65 L 15.00 12.34 L 15.50 11.44 L 16.00 10.03 L 16.50 8.25 L 17.00 6.28 L 17.50 4.31 L 18.00 2.53 L 18.50 1.13 L 19.00 0.22 L 19.50 -0.09 L 20.00 0.22 L 20.50 1.13 L 21.00 2.53 L 21.50 4.31 L 22.00 6.28" />
      {children}
    </svg>
  );
});

export default VitaleRose;
