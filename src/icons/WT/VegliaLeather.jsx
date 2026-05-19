import React from 'react';

export const iconData = {
  "id": "VegliaLeather",
  "name": "VegliaLeather",
  "category": "WT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.79 L 2.50 9.38 L 3.00 10.82 L 3.50 11.96 L 4.00 12.69 L 4.50 12.94 L 5.00 12.69 L 5.50 11.96 L 6.00 10.82 L 6.50 9.38 L 7.00 7.79 L 7.50 6.19 L 8.00 4.76 L 8.50 3.62 L 9.00 2.88 L 9.50 2.63 L 10.00 2.88 L 10.50 3.62 L 11.00 4.76 L 11.50 6.19 L 12.00 7.79 L 12.50 9.38 L 13.00 10.82 L 13.50 11.96 L 14.00 12.69 L 14.50 12.94 L 15.00 12.69 L 15.50 11.96 L 16.00 10.82 L 16.50 9.38 L 17.00 7.79 L 17.50 6.19 L 18.00 4.76 L 18.50 3.62 L 19.00 2.88 L 19.50 2.63 L 20.00 2.88 L 20.50 3.62 L 21.00 4.76 L 21.50 6.19 L 22.00 7.79"
      }
    ]
  ]
};

export const VegliaLeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.79 L 2.50 9.38 L 3.00 10.82 L 3.50 11.96 L 4.00 12.69 L 4.50 12.94 L 5.00 12.69 L 5.50 11.96 L 6.00 10.82 L 6.50 9.38 L 7.00 7.79 L 7.50 6.19 L 8.00 4.76 L 8.50 3.62 L 9.00 2.88 L 9.50 2.63 L 10.00 2.88 L 10.50 3.62 L 11.00 4.76 L 11.50 6.19 L 12.00 7.79 L 12.50 9.38 L 13.00 10.82 L 13.50 11.96 L 14.00 12.69 L 14.50 12.94 L 15.00 12.69 L 15.50 11.96 L 16.00 10.82 L 16.50 9.38 L 17.00 7.79 L 17.50 6.19 L 18.00 4.76 L 18.50 3.62 L 19.00 2.88 L 19.50 2.63 L 20.00 2.88 L 20.50 3.62 L 21.00 4.76 L 21.50 6.19 L 22.00 7.79" />
      {children}
    </svg>
  );
});

export default VegliaLeather;
