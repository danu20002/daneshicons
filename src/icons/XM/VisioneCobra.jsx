import React from 'react';

export const iconData = {
  "id": "VisioneCobra",
  "name": "VisioneCobra",
  "category": "XM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.31 L 2.50 8.00 L 3.00 9.52 L 3.50 10.73 L 4.00 11.51 L 4.50 11.78 L 5.00 11.51 L 5.50 10.73 L 6.00 9.52 L 6.50 8.00 L 7.00 6.31 L 7.50 4.62 L 8.00 3.10 L 8.50 1.89 L 9.00 1.11 L 9.50 0.84 L 10.00 1.11 L 10.50 1.89 L 11.00 3.10 L 11.50 4.62 L 12.00 6.31 L 12.50 8.00 L 13.00 9.52 L 13.50 10.73 L 14.00 11.51 L 14.50 11.78 L 15.00 11.51 L 15.50 10.73 L 16.00 9.52 L 16.50 8.00 L 17.00 6.31 L 17.50 4.62 L 18.00 3.10 L 18.50 1.89 L 19.00 1.11 L 19.50 0.84 L 20.00 1.11 L 20.50 1.89 L 21.00 3.10 L 21.50 4.62 L 22.00 6.31"
      }
    ]
  ]
};

export const VisioneCobra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.31 L 2.50 8.00 L 3.00 9.52 L 3.50 10.73 L 4.00 11.51 L 4.50 11.78 L 5.00 11.51 L 5.50 10.73 L 6.00 9.52 L 6.50 8.00 L 7.00 6.31 L 7.50 4.62 L 8.00 3.10 L 8.50 1.89 L 9.00 1.11 L 9.50 0.84 L 10.00 1.11 L 10.50 1.89 L 11.00 3.10 L 11.50 4.62 L 12.00 6.31 L 12.50 8.00 L 13.00 9.52 L 13.50 10.73 L 14.00 11.51 L 14.50 11.78 L 15.00 11.51 L 15.50 10.73 L 16.00 9.52 L 16.50 8.00 L 17.00 6.31 L 17.50 4.62 L 18.00 3.10 L 18.50 1.89 L 19.00 1.11 L 19.50 0.84 L 20.00 1.11 L 20.50 1.89 L 21.00 3.10 L 21.50 4.62 L 22.00 6.31" />
      {children}
    </svg>
  );
});

export default VisioneCobra;
