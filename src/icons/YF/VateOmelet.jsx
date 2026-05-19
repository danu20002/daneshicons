import React from 'react';

export const iconData = {
  "id": "VateOmelet",
  "name": "VateOmelet",
  "category": "YF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.20 L 2.50 9.87 L 3.00 11.97 L 3.50 13.02 L 4.00 12.81 L 4.50 11.37 L 5.00 9.02 L 5.50 6.27 L 6.00 3.73 L 6.50 1.94 L 7.00 1.30 L 7.50 1.94 L 8.00 3.73 L 8.50 6.27 L 9.00 9.02 L 9.50 11.37 L 10.00 12.81 L 10.50 13.02 L 11.00 11.97 L 11.50 9.87 L 12.00 7.20 L 12.50 4.52 L 13.00 2.42 L 13.50 1.37 L 14.00 1.58 L 14.50 3.02 L 15.00 5.37 L 15.50 8.12 L 16.00 10.66 L 16.50 12.45 L 17.00 13.10 L 17.50 12.45 L 18.00 10.66 L 18.50 8.12 L 19.00 5.37 L 19.50 3.02 L 20.00 1.58 L 20.50 1.37 L 21.00 2.42 L 21.50 4.52 L 22.00 7.20"
      }
    ]
  ]
};

export const VateOmelet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.20 L 2.50 9.87 L 3.00 11.97 L 3.50 13.02 L 4.00 12.81 L 4.50 11.37 L 5.00 9.02 L 5.50 6.27 L 6.00 3.73 L 6.50 1.94 L 7.00 1.30 L 7.50 1.94 L 8.00 3.73 L 8.50 6.27 L 9.00 9.02 L 9.50 11.37 L 10.00 12.81 L 10.50 13.02 L 11.00 11.97 L 11.50 9.87 L 12.00 7.20 L 12.50 4.52 L 13.00 2.42 L 13.50 1.37 L 14.00 1.58 L 14.50 3.02 L 15.00 5.37 L 15.50 8.12 L 16.00 10.66 L 16.50 12.45 L 17.00 13.10 L 17.50 12.45 L 18.00 10.66 L 18.50 8.12 L 19.00 5.37 L 19.50 3.02 L 20.00 1.58 L 20.50 1.37 L 21.00 2.42 L 21.50 4.52 L 22.00 7.20" />
      {children}
    </svg>
  );
});

export default VateOmelet;
