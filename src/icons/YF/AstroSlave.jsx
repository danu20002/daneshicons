import React from 'react';

export const iconData = {
  "id": "AstroSlave",
  "name": "AstroSlave",
  "category": "YF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.45 L 2.50 8.70 L 3.00 9.83 L 3.50 10.72 L 4.00 11.29 L 4.50 11.49 L 5.00 11.29 L 5.50 10.72 L 6.00 9.83 L 6.50 8.70 L 7.00 7.45 L 7.50 6.21 L 8.00 5.08 L 8.50 4.19 L 9.00 3.62 L 9.50 3.42 L 10.00 3.62 L 10.50 4.19 L 11.00 5.08 L 11.50 6.21 L 12.00 7.45 L 12.50 8.70 L 13.00 9.83 L 13.50 10.72 L 14.00 11.29 L 14.50 11.49 L 15.00 11.29 L 15.50 10.72 L 16.00 9.83 L 16.50 8.70 L 17.00 7.45 L 17.50 6.21 L 18.00 5.08 L 18.50 4.19 L 19.00 3.62 L 19.50 3.42 L 20.00 3.62 L 20.50 4.19 L 21.00 5.08 L 21.50 6.21 L 22.00 7.45"
      }
    ]
  ]
};

export const AstroSlave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.45 L 2.50 8.70 L 3.00 9.83 L 3.50 10.72 L 4.00 11.29 L 4.50 11.49 L 5.00 11.29 L 5.50 10.72 L 6.00 9.83 L 6.50 8.70 L 7.00 7.45 L 7.50 6.21 L 8.00 5.08 L 8.50 4.19 L 9.00 3.62 L 9.50 3.42 L 10.00 3.62 L 10.50 4.19 L 11.00 5.08 L 11.50 6.21 L 12.00 7.45 L 12.50 8.70 L 13.00 9.83 L 13.50 10.72 L 14.00 11.29 L 14.50 11.49 L 15.00 11.29 L 15.50 10.72 L 16.00 9.83 L 16.50 8.70 L 17.00 7.45 L 17.50 6.21 L 18.00 5.08 L 18.50 4.19 L 19.00 3.62 L 19.50 3.42 L 20.00 3.62 L 20.50 4.19 L 21.00 5.08 L 21.50 6.21 L 22.00 7.45" />
      {children}
    </svg>
  );
});

export default AstroSlave;
