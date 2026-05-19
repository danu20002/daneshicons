import React from 'react';

export const iconData = {
  "id": "YoyoScratch",
  "name": "YoyoScratch",
  "category": "WA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.29 L 2.50 8.17 L 3.00 9.87 L 3.50 11.21 L 4.00 12.08 L 4.50 12.37 L 5.00 12.08 L 5.50 11.21 L 6.00 9.87 L 6.50 8.17 L 7.00 6.29 L 7.50 4.41 L 8.00 2.71 L 8.50 1.37 L 9.00 0.50 L 9.50 0.20 L 10.00 0.50 L 10.50 1.37 L 11.00 2.71 L 11.50 4.41 L 12.00 6.29 L 12.50 8.17 L 13.00 9.87 L 13.50 11.21 L 14.00 12.08 L 14.50 12.37 L 15.00 12.08 L 15.50 11.21 L 16.00 9.87 L 16.50 8.17 L 17.00 6.29 L 17.50 4.41 L 18.00 2.71 L 18.50 1.37 L 19.00 0.50 L 19.50 0.20 L 20.00 0.50 L 20.50 1.37 L 21.00 2.71 L 21.50 4.41 L 22.00 6.29"
      }
    ]
  ]
};

export const YoyoScratch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.29 L 2.50 8.17 L 3.00 9.87 L 3.50 11.21 L 4.00 12.08 L 4.50 12.37 L 5.00 12.08 L 5.50 11.21 L 6.00 9.87 L 6.50 8.17 L 7.00 6.29 L 7.50 4.41 L 8.00 2.71 L 8.50 1.37 L 9.00 0.50 L 9.50 0.20 L 10.00 0.50 L 10.50 1.37 L 11.00 2.71 L 11.50 4.41 L 12.00 6.29 L 12.50 8.17 L 13.00 9.87 L 13.50 11.21 L 14.00 12.08 L 14.50 12.37 L 15.00 12.08 L 15.50 11.21 L 16.00 9.87 L 16.50 8.17 L 17.00 6.29 L 17.50 4.41 L 18.00 2.71 L 18.50 1.37 L 19.00 0.50 L 19.50 0.20 L 20.00 0.50 L 20.50 1.37 L 21.00 2.71 L 21.50 4.41 L 22.00 6.29" />
      {children}
    </svg>
  );
});

export default YoyoScratch;
