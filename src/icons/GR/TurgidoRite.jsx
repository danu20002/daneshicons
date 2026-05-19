import React from 'react';

export const iconData = {
  "id": "TurgidoRite",
  "name": "TurgidoRite",
  "category": "GR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.67 L 2.50 9.70 L 3.00 12.07 L 3.50 13.26 L 4.00 13.02 L 4.50 11.39 L 5.00 8.73 L 5.50 5.62 L 6.00 2.74 L 6.50 0.72 L 7.00 -0.01 L 7.50 0.72 L 8.00 2.74 L 8.50 5.62 L 9.00 8.73 L 9.50 11.39 L 10.00 13.02 L 10.50 13.26 L 11.00 12.07 L 11.50 9.70 L 12.00 6.67 L 12.50 3.63 L 13.00 1.26 L 13.50 0.07 L 14.00 0.31 L 14.50 1.94 L 15.00 4.60 L 15.50 7.71 L 16.00 10.59 L 16.50 12.62 L 17.00 13.34 L 17.50 12.62 L 18.00 10.59 L 18.50 7.71 L 19.00 4.60 L 19.50 1.94 L 20.00 0.31 L 20.50 0.07 L 21.00 1.26 L 21.50 3.63 L 22.00 6.67"
      }
    ]
  ]
};

export const TurgidoRite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.67 L 2.50 9.70 L 3.00 12.07 L 3.50 13.26 L 4.00 13.02 L 4.50 11.39 L 5.00 8.73 L 5.50 5.62 L 6.00 2.74 L 6.50 0.72 L 7.00 -0.01 L 7.50 0.72 L 8.00 2.74 L 8.50 5.62 L 9.00 8.73 L 9.50 11.39 L 10.00 13.02 L 10.50 13.26 L 11.00 12.07 L 11.50 9.70 L 12.00 6.67 L 12.50 3.63 L 13.00 1.26 L 13.50 0.07 L 14.00 0.31 L 14.50 1.94 L 15.00 4.60 L 15.50 7.71 L 16.00 10.59 L 16.50 12.62 L 17.00 13.34 L 17.50 12.62 L 18.00 10.59 L 18.50 7.71 L 19.00 4.60 L 19.50 1.94 L 20.00 0.31 L 20.50 0.07 L 21.00 1.26 L 21.50 3.63 L 22.00 6.67" />
      {children}
    </svg>
  );
});

export default TurgidoRite;
