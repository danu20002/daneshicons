import React from 'react';

export const iconData = {
  "id": "VeloceCoast",
  "name": "VeloceCoast",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.21 L 2.50 9.42 L 3.00 11.16 L 3.50 12.03 L 4.00 11.85 L 4.50 10.66 L 5.00 8.72 L 5.50 6.44 L 6.00 4.34 L 6.50 2.86 L 7.00 2.32 L 7.50 2.86 L 8.00 4.34 L 8.50 6.44 L 9.00 8.72 L 9.50 10.66 L 10.00 11.85 L 10.50 12.03 L 11.00 11.16 L 11.50 9.42 L 12.00 7.21 L 12.50 4.99 L 13.00 3.26 L 13.50 2.38 L 14.00 2.56 L 14.50 3.75 L 15.00 5.70 L 15.50 7.97 L 16.00 10.08 L 16.50 11.56 L 17.00 12.09 L 17.50 11.56 L 18.00 10.08 L 18.50 7.97 L 19.00 5.70 L 19.50 3.75 L 20.00 2.56 L 20.50 2.38 L 21.00 3.26 L 21.50 4.99 L 22.00 7.21"
      }
    ]
  ]
};

export const VeloceCoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.21 L 2.50 9.42 L 3.00 11.16 L 3.50 12.03 L 4.00 11.85 L 4.50 10.66 L 5.00 8.72 L 5.50 6.44 L 6.00 4.34 L 6.50 2.86 L 7.00 2.32 L 7.50 2.86 L 8.00 4.34 L 8.50 6.44 L 9.00 8.72 L 9.50 10.66 L 10.00 11.85 L 10.50 12.03 L 11.00 11.16 L 11.50 9.42 L 12.00 7.21 L 12.50 4.99 L 13.00 3.26 L 13.50 2.38 L 14.00 2.56 L 14.50 3.75 L 15.00 5.70 L 15.50 7.97 L 16.00 10.08 L 16.50 11.56 L 17.00 12.09 L 17.50 11.56 L 18.00 10.08 L 18.50 7.97 L 19.00 5.70 L 19.50 3.75 L 20.00 2.56 L 20.50 2.38 L 21.00 3.26 L 21.50 4.99 L 22.00 7.21" />
      {children}
    </svg>
  );
});

export default VeloceCoast;
