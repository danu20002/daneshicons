import React from 'react';

export const iconData = {
  "id": "LongiSwim",
  "name": "LongiSwim",
  "category": "VH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.53 L 2.50 10.31 L 3.00 12.48 L 3.50 13.58 L 4.00 13.35 L 4.50 11.86 L 5.00 9.42 L 5.50 6.57 L 6.00 3.93 L 6.50 2.07 L 7.00 1.40 L 7.50 2.07 L 8.00 3.93 L 8.50 6.57 L 9.00 9.42 L 9.50 11.86 L 10.00 13.35 L 10.50 13.58 L 11.00 12.48 L 11.50 10.31 L 12.00 7.53 L 12.50 4.75 L 13.00 2.57 L 13.50 1.48 L 14.00 1.70 L 14.50 3.19 L 15.00 5.63 L 15.50 8.48 L 16.00 11.13 L 16.50 12.99 L 17.00 13.65 L 17.50 12.99 L 18.00 11.13 L 18.50 8.48 L 19.00 5.63 L 19.50 3.19 L 20.00 1.70 L 20.50 1.48 L 21.00 2.57 L 21.50 4.75 L 22.00 7.53"
      }
    ]
  ]
};

export const LongiSwim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.53 L 2.50 10.31 L 3.00 12.48 L 3.50 13.58 L 4.00 13.35 L 4.50 11.86 L 5.00 9.42 L 5.50 6.57 L 6.00 3.93 L 6.50 2.07 L 7.00 1.40 L 7.50 2.07 L 8.00 3.93 L 8.50 6.57 L 9.00 9.42 L 9.50 11.86 L 10.00 13.35 L 10.50 13.58 L 11.00 12.48 L 11.50 10.31 L 12.00 7.53 L 12.50 4.75 L 13.00 2.57 L 13.50 1.48 L 14.00 1.70 L 14.50 3.19 L 15.00 5.63 L 15.50 8.48 L 16.00 11.13 L 16.50 12.99 L 17.00 13.65 L 17.50 12.99 L 18.00 11.13 L 18.50 8.48 L 19.00 5.63 L 19.50 3.19 L 20.00 1.70 L 20.50 1.48 L 21.00 2.57 L 21.50 4.75 L 22.00 7.53" />
      {children}
    </svg>
  );
});

export default LongiSwim;
