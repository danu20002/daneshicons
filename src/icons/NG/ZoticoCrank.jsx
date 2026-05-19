import React from 'react';

export const iconData = {
  "id": "ZoticoCrank",
  "name": "ZoticoCrank",
  "category": "NG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.61 L 2.50 8.65 L 3.00 10.50 L 3.50 11.96 L 4.00 12.90 L 4.50 13.22 L 5.00 12.90 L 5.50 11.96 L 6.00 10.50 L 6.50 8.65 L 7.00 6.61 L 7.50 4.57 L 8.00 2.72 L 8.50 1.26 L 9.00 0.32 L 9.50 -0.00 L 10.00 0.32 L 10.50 1.26 L 11.00 2.72 L 11.50 4.57 L 12.00 6.61 L 12.50 8.65 L 13.00 10.50 L 13.50 11.96 L 14.00 12.90 L 14.50 13.22 L 15.00 12.90 L 15.50 11.96 L 16.00 10.50 L 16.50 8.65 L 17.00 6.61 L 17.50 4.57 L 18.00 2.72 L 18.50 1.26 L 19.00 0.32 L 19.50 -0.00 L 20.00 0.32 L 20.50 1.26 L 21.00 2.72 L 21.50 4.57 L 22.00 6.61"
      }
    ]
  ]
};

export const ZoticoCrank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.61 L 2.50 8.65 L 3.00 10.50 L 3.50 11.96 L 4.00 12.90 L 4.50 13.22 L 5.00 12.90 L 5.50 11.96 L 6.00 10.50 L 6.50 8.65 L 7.00 6.61 L 7.50 4.57 L 8.00 2.72 L 8.50 1.26 L 9.00 0.32 L 9.50 -0.00 L 10.00 0.32 L 10.50 1.26 L 11.00 2.72 L 11.50 4.57 L 12.00 6.61 L 12.50 8.65 L 13.00 10.50 L 13.50 11.96 L 14.00 12.90 L 14.50 13.22 L 15.00 12.90 L 15.50 11.96 L 16.00 10.50 L 16.50 8.65 L 17.00 6.61 L 17.50 4.57 L 18.00 2.72 L 18.50 1.26 L 19.00 0.32 L 19.50 -0.00 L 20.00 0.32 L 20.50 1.26 L 21.00 2.72 L 21.50 4.57 L 22.00 6.61" />
      {children}
    </svg>
  );
});

export default ZoticoCrank;
