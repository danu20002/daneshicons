import React from 'react';

export const iconData = {
  "id": "CarnoUrgent",
  "name": "CarnoUrgent",
  "category": "TC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.08 L 2.50 9.92 L 3.00 11.68 L 3.50 11.68 L 4.00 9.92 L 4.50 7.08 L 5.00 4.24 L 5.50 2.49 L 6.00 2.49 L 6.50 4.24 L 7.00 7.08 L 7.50 9.92 L 8.00 11.68 L 8.50 11.68 L 9.00 9.92 L 9.50 7.08 L 10.00 4.24 L 10.50 2.49 L 11.00 2.49 L 11.50 4.24 L 12.00 7.08 L 12.50 9.92 L 13.00 11.68 L 13.50 11.68 L 14.00 9.92 L 14.50 7.08 L 15.00 4.24 L 15.50 2.49 L 16.00 2.49 L 16.50 4.24 L 17.00 7.08 L 17.50 9.92 L 18.00 11.68 L 18.50 11.68 L 19.00 9.92 L 19.50 7.08 L 20.00 4.24 L 20.50 2.49 L 21.00 2.49 L 21.50 4.24 L 22.00 7.08"
      }
    ]
  ]
};

export const CarnoUrgent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.08 L 2.50 9.92 L 3.00 11.68 L 3.50 11.68 L 4.00 9.92 L 4.50 7.08 L 5.00 4.24 L 5.50 2.49 L 6.00 2.49 L 6.50 4.24 L 7.00 7.08 L 7.50 9.92 L 8.00 11.68 L 8.50 11.68 L 9.00 9.92 L 9.50 7.08 L 10.00 4.24 L 10.50 2.49 L 11.00 2.49 L 11.50 4.24 L 12.00 7.08 L 12.50 9.92 L 13.00 11.68 L 13.50 11.68 L 14.00 9.92 L 14.50 7.08 L 15.00 4.24 L 15.50 2.49 L 16.00 2.49 L 16.50 4.24 L 17.00 7.08 L 17.50 9.92 L 18.00 11.68 L 18.50 11.68 L 19.00 9.92 L 19.50 7.08 L 20.00 4.24 L 20.50 2.49 L 21.00 2.49 L 21.50 4.24 L 22.00 7.08" />
      {children}
    </svg>
  );
});

export default CarnoUrgent;
