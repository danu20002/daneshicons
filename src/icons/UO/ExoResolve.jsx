import React from 'react';

export const iconData = {
  "id": "ExoResolve",
  "name": "ExoResolve",
  "category": "UO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.20 L 2.50 10.99 L 3.00 13.34 L 3.50 13.34 L 4.00 10.99 L 4.50 7.20 L 5.00 3.41 L 5.50 1.06 L 6.00 1.06 L 6.50 3.41 L 7.00 7.20 L 7.50 10.99 L 8.00 13.34 L 8.50 13.34 L 9.00 10.99 L 9.50 7.20 L 10.00 3.41 L 10.50 1.06 L 11.00 1.06 L 11.50 3.41 L 12.00 7.20 L 12.50 10.99 L 13.00 13.34 L 13.50 13.34 L 14.00 10.99 L 14.50 7.20 L 15.00 3.41 L 15.50 1.06 L 16.00 1.06 L 16.50 3.41 L 17.00 7.20 L 17.50 10.99 L 18.00 13.34 L 18.50 13.34 L 19.00 10.99 L 19.50 7.20 L 20.00 3.41 L 20.50 1.06 L 21.00 1.06 L 21.50 3.41 L 22.00 7.20"
      }
    ]
  ]
};

export const ExoResolve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.20 L 2.50 10.99 L 3.00 13.34 L 3.50 13.34 L 4.00 10.99 L 4.50 7.20 L 5.00 3.41 L 5.50 1.06 L 6.00 1.06 L 6.50 3.41 L 7.00 7.20 L 7.50 10.99 L 8.00 13.34 L 8.50 13.34 L 9.00 10.99 L 9.50 7.20 L 10.00 3.41 L 10.50 1.06 L 11.00 1.06 L 11.50 3.41 L 12.00 7.20 L 12.50 10.99 L 13.00 13.34 L 13.50 13.34 L 14.00 10.99 L 14.50 7.20 L 15.00 3.41 L 15.50 1.06 L 16.00 1.06 L 16.50 3.41 L 17.00 7.20 L 17.50 10.99 L 18.00 13.34 L 18.50 13.34 L 19.00 10.99 L 19.50 7.20 L 20.00 3.41 L 20.50 1.06 L 21.00 1.06 L 21.50 3.41 L 22.00 7.20" />
      {children}
    </svg>
  );
});

export default ExoResolve;
