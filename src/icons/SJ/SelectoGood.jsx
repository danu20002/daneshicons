import React from 'react';

export const iconData = {
  "id": "SelectoGood",
  "name": "SelectoGood",
  "category": "SJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.40 L 2.50 8.86 L 3.00 10.00 L 3.50 10.57 L 4.00 10.45 L 4.50 9.67 L 5.00 8.39 L 5.50 6.90 L 6.00 5.51 L 6.50 4.54 L 7.00 4.19 L 7.50 4.54 L 8.00 5.51 L 8.50 6.90 L 9.00 8.39 L 9.50 9.67 L 10.00 10.45 L 10.50 10.57 L 11.00 10.00 L 11.50 8.86 L 12.00 7.40 L 12.50 5.94 L 13.00 4.80 L 13.50 4.23 L 14.00 4.35 L 14.50 5.13 L 15.00 6.41 L 15.50 7.90 L 16.00 9.29 L 16.50 10.26 L 17.00 10.61 L 17.50 10.26 L 18.00 9.29 L 18.50 7.90 L 19.00 6.41 L 19.50 5.13 L 20.00 4.35 L 20.50 4.23 L 21.00 4.80 L 21.50 5.94 L 22.00 7.40"
      }
    ]
  ]
};

export const SelectoGood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.40 L 2.50 8.86 L 3.00 10.00 L 3.50 10.57 L 4.00 10.45 L 4.50 9.67 L 5.00 8.39 L 5.50 6.90 L 6.00 5.51 L 6.50 4.54 L 7.00 4.19 L 7.50 4.54 L 8.00 5.51 L 8.50 6.90 L 9.00 8.39 L 9.50 9.67 L 10.00 10.45 L 10.50 10.57 L 11.00 10.00 L 11.50 8.86 L 12.00 7.40 L 12.50 5.94 L 13.00 4.80 L 13.50 4.23 L 14.00 4.35 L 14.50 5.13 L 15.00 6.41 L 15.50 7.90 L 16.00 9.29 L 16.50 10.26 L 17.00 10.61 L 17.50 10.26 L 18.00 9.29 L 18.50 7.90 L 19.00 6.41 L 19.50 5.13 L 20.00 4.35 L 20.50 4.23 L 21.00 4.80 L 21.50 5.94 L 22.00 7.40" />
      {children}
    </svg>
  );
});

export default SelectoGood;
