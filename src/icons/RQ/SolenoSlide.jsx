import React from 'react';

export const iconData = {
  "id": "SolenoSlide",
  "name": "SolenoSlide",
  "category": "RQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.71 L 2.50 9.72 L 3.00 11.29 L 3.50 12.08 L 4.00 11.92 L 4.50 10.84 L 5.00 9.08 L 5.50 7.01 L 6.00 5.11 L 6.50 3.76 L 7.00 3.28 L 7.50 3.76 L 8.00 5.11 L 8.50 7.01 L 9.00 9.08 L 9.50 10.84 L 10.00 11.92 L 10.50 12.08 L 11.00 11.29 L 11.50 9.72 L 12.00 7.71 L 12.50 5.70 L 13.00 4.13 L 13.50 3.33 L 14.00 3.50 L 14.50 4.58 L 15.00 6.34 L 15.50 8.40 L 16.00 10.31 L 16.50 11.65 L 17.00 12.13 L 17.50 11.65 L 18.00 10.31 L 18.50 8.40 L 19.00 6.34 L 19.50 4.58 L 20.00 3.50 L 20.50 3.33 L 21.00 4.13 L 21.50 5.70 L 22.00 7.71"
      }
    ]
  ]
};

export const SolenoSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.71 L 2.50 9.72 L 3.00 11.29 L 3.50 12.08 L 4.00 11.92 L 4.50 10.84 L 5.00 9.08 L 5.50 7.01 L 6.00 5.11 L 6.50 3.76 L 7.00 3.28 L 7.50 3.76 L 8.00 5.11 L 8.50 7.01 L 9.00 9.08 L 9.50 10.84 L 10.00 11.92 L 10.50 12.08 L 11.00 11.29 L 11.50 9.72 L 12.00 7.71 L 12.50 5.70 L 13.00 4.13 L 13.50 3.33 L 14.00 3.50 L 14.50 4.58 L 15.00 6.34 L 15.50 8.40 L 16.00 10.31 L 16.50 11.65 L 17.00 12.13 L 17.50 11.65 L 18.00 10.31 L 18.50 8.40 L 19.00 6.34 L 19.50 4.58 L 20.00 3.50 L 20.50 3.33 L 21.00 4.13 L 21.50 5.70 L 22.00 7.71" />
      {children}
    </svg>
  );
});

export default SolenoSlide;
