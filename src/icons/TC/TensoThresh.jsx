import React from 'react';

export const iconData = {
  "id": "TensoThresh",
  "name": "TensoThresh",
  "category": "TC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.74 L 2.50 10.27 L 3.00 12.25 L 3.50 13.24 L 4.00 13.04 L 4.50 11.68 L 5.00 9.46 L 5.50 6.87 L 6.00 4.46 L 6.50 2.77 L 7.00 2.17 L 7.50 2.77 L 8.00 4.46 L 8.50 6.87 L 9.00 9.46 L 9.50 11.68 L 10.00 13.04 L 10.50 13.24 L 11.00 12.25 L 11.50 10.27 L 12.00 7.74 L 12.50 5.21 L 13.00 3.23 L 13.50 2.23 L 14.00 2.44 L 14.50 3.80 L 15.00 6.02 L 15.50 8.61 L 16.00 11.01 L 16.50 12.70 L 17.00 13.31 L 17.50 12.70 L 18.00 11.01 L 18.50 8.61 L 19.00 6.02 L 19.50 3.80 L 20.00 2.44 L 20.50 2.23 L 21.00 3.23 L 21.50 5.21 L 22.00 7.74"
      }
    ]
  ]
};

export const TensoThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.74 L 2.50 10.27 L 3.00 12.25 L 3.50 13.24 L 4.00 13.04 L 4.50 11.68 L 5.00 9.46 L 5.50 6.87 L 6.00 4.46 L 6.50 2.77 L 7.00 2.17 L 7.50 2.77 L 8.00 4.46 L 8.50 6.87 L 9.00 9.46 L 9.50 11.68 L 10.00 13.04 L 10.50 13.24 L 11.00 12.25 L 11.50 10.27 L 12.00 7.74 L 12.50 5.21 L 13.00 3.23 L 13.50 2.23 L 14.00 2.44 L 14.50 3.80 L 15.00 6.02 L 15.50 8.61 L 16.00 11.01 L 16.50 12.70 L 17.00 13.31 L 17.50 12.70 L 18.00 11.01 L 18.50 8.61 L 19.00 6.02 L 19.50 3.80 L 20.00 2.44 L 20.50 2.23 L 21.00 3.23 L 21.50 5.21 L 22.00 7.74" />
      {children}
    </svg>
  );
});

export default TensoThresh;
