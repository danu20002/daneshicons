import React from 'react';

export const iconData = {
  "id": "PhagoHoney",
  "name": "PhagoHoney",
  "category": "ZR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.17 L 2.50 9.72 L 3.00 11.72 L 3.50 12.72 L 4.00 12.51 L 4.50 11.14 L 5.00 8.91 L 5.50 6.30 L 6.00 3.88 L 6.50 2.17 L 7.00 1.56 L 7.50 2.17 L 8.00 3.88 L 8.50 6.30 L 9.00 8.91 L 9.50 11.14 L 10.00 12.51 L 10.50 12.72 L 11.00 11.72 L 11.50 9.72 L 12.00 7.17 L 12.50 4.63 L 13.00 2.63 L 13.50 1.63 L 14.00 1.84 L 14.50 3.21 L 15.00 5.44 L 15.50 8.05 L 16.00 10.47 L 16.50 12.18 L 17.00 12.79 L 17.50 12.18 L 18.00 10.47 L 18.50 8.05 L 19.00 5.44 L 19.50 3.21 L 20.00 1.84 L 20.50 1.63 L 21.00 2.63 L 21.50 4.63 L 22.00 7.17"
      }
    ]
  ]
};

export const PhagoHoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.17 L 2.50 9.72 L 3.00 11.72 L 3.50 12.72 L 4.00 12.51 L 4.50 11.14 L 5.00 8.91 L 5.50 6.30 L 6.00 3.88 L 6.50 2.17 L 7.00 1.56 L 7.50 2.17 L 8.00 3.88 L 8.50 6.30 L 9.00 8.91 L 9.50 11.14 L 10.00 12.51 L 10.50 12.72 L 11.00 11.72 L 11.50 9.72 L 12.00 7.17 L 12.50 4.63 L 13.00 2.63 L 13.50 1.63 L 14.00 1.84 L 14.50 3.21 L 15.00 5.44 L 15.50 8.05 L 16.00 10.47 L 16.50 12.18 L 17.00 12.79 L 17.50 12.18 L 18.00 10.47 L 18.50 8.05 L 19.00 5.44 L 19.50 3.21 L 20.00 1.84 L 20.50 1.63 L 21.00 2.63 L 21.50 4.63 L 22.00 7.17" />
      {children}
    </svg>
  );
});

export default PhagoHoney;
