import React from 'react';

export const iconData = {
  "id": "VistaJelly",
  "name": "VistaJelly",
  "category": "UO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.67 L 2.50 7.82 L 3.00 8.87 L 3.50 9.70 L 4.00 10.23 L 4.50 10.41 L 5.00 10.23 L 5.50 9.70 L 6.00 8.87 L 6.50 7.82 L 7.00 6.67 L 7.50 5.51 L 8.00 4.46 L 8.50 3.63 L 9.00 3.10 L 9.50 2.92 L 10.00 3.10 L 10.50 3.63 L 11.00 4.46 L 11.50 5.51 L 12.00 6.67 L 12.50 7.82 L 13.00 8.87 L 13.50 9.70 L 14.00 10.23 L 14.50 10.41 L 15.00 10.23 L 15.50 9.70 L 16.00 8.87 L 16.50 7.82 L 17.00 6.67 L 17.50 5.51 L 18.00 4.46 L 18.50 3.63 L 19.00 3.10 L 19.50 2.92 L 20.00 3.10 L 20.50 3.63 L 21.00 4.46 L 21.50 5.51 L 22.00 6.67"
      }
    ]
  ]
};

export const VistaJelly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.67 L 2.50 7.82 L 3.00 8.87 L 3.50 9.70 L 4.00 10.23 L 4.50 10.41 L 5.00 10.23 L 5.50 9.70 L 6.00 8.87 L 6.50 7.82 L 7.00 6.67 L 7.50 5.51 L 8.00 4.46 L 8.50 3.63 L 9.00 3.10 L 9.50 2.92 L 10.00 3.10 L 10.50 3.63 L 11.00 4.46 L 11.50 5.51 L 12.00 6.67 L 12.50 7.82 L 13.00 8.87 L 13.50 9.70 L 14.00 10.23 L 14.50 10.41 L 15.00 10.23 L 15.50 9.70 L 16.00 8.87 L 16.50 7.82 L 17.00 6.67 L 17.50 5.51 L 18.00 4.46 L 18.50 3.63 L 19.00 3.10 L 19.50 2.92 L 20.00 3.10 L 20.50 3.63 L 21.00 4.46 L 21.50 5.51 L 22.00 6.67" />
      {children}
    </svg>
  );
});

export default VistaJelly;
