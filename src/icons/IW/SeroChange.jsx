import React from 'react';

export const iconData = {
  "id": "SeroChange",
  "name": "SeroChange",
  "category": "IW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.17 L 2.50 9.25 L 3.00 11.14 L 3.50 12.63 L 4.00 13.59 L 4.50 13.92 L 5.00 13.59 L 5.50 12.63 L 6.00 11.14 L 6.50 9.25 L 7.00 7.17 L 7.50 5.08 L 8.00 3.20 L 8.50 1.70 L 9.00 0.74 L 9.50 0.41 L 10.00 0.74 L 10.50 1.70 L 11.00 3.20 L 11.50 5.08 L 12.00 7.17 L 12.50 9.25 L 13.00 11.14 L 13.50 12.63 L 14.00 13.59 L 14.50 13.92 L 15.00 13.59 L 15.50 12.63 L 16.00 11.14 L 16.50 9.25 L 17.00 7.17 L 17.50 5.08 L 18.00 3.20 L 18.50 1.70 L 19.00 0.74 L 19.50 0.41 L 20.00 0.74 L 20.50 1.70 L 21.00 3.20 L 21.50 5.08 L 22.00 7.17"
      }
    ]
  ]
};

export const SeroChange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.17 L 2.50 9.25 L 3.00 11.14 L 3.50 12.63 L 4.00 13.59 L 4.50 13.92 L 5.00 13.59 L 5.50 12.63 L 6.00 11.14 L 6.50 9.25 L 7.00 7.17 L 7.50 5.08 L 8.00 3.20 L 8.50 1.70 L 9.00 0.74 L 9.50 0.41 L 10.00 0.74 L 10.50 1.70 L 11.00 3.20 L 11.50 5.08 L 12.00 7.17 L 12.50 9.25 L 13.00 11.14 L 13.50 12.63 L 14.00 13.59 L 14.50 13.92 L 15.00 13.59 L 15.50 12.63 L 16.00 11.14 L 16.50 9.25 L 17.00 7.17 L 17.50 5.08 L 18.00 3.20 L 18.50 1.70 L 19.00 0.74 L 19.50 0.41 L 20.00 0.74 L 20.50 1.70 L 21.00 3.20 L 21.50 5.08 L 22.00 7.17" />
      {children}
    </svg>
  );
});

export default SeroChange;
