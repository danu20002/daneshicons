import React from 'react';

export const iconData = {
  "id": "TriploJunior",
  "name": "TriploJunior",
  "category": "AV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.67 L 2.50 8.51 L 3.00 9.95 L 3.50 10.68 L 4.00 10.53 L 4.50 9.54 L 5.00 7.93 L 5.50 6.04 L 6.00 4.29 L 6.50 3.06 L 7.00 2.62 L 7.50 3.06 L 8.00 4.29 L 8.50 6.04 L 9.00 7.93 L 9.50 9.54 L 10.00 10.53 L 10.50 10.68 L 11.00 9.95 L 11.50 8.51 L 12.00 6.67 L 12.50 4.83 L 13.00 3.39 L 13.50 2.67 L 14.00 2.81 L 14.50 3.80 L 15.00 5.42 L 15.50 7.31 L 16.00 9.06 L 16.50 10.29 L 17.00 10.73 L 17.50 10.29 L 18.00 9.06 L 18.50 7.31 L 19.00 5.42 L 19.50 3.80 L 20.00 2.81 L 20.50 2.67 L 21.00 3.39 L 21.50 4.83 L 22.00 6.67"
      }
    ]
  ]
};

export const TriploJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.67 L 2.50 8.51 L 3.00 9.95 L 3.50 10.68 L 4.00 10.53 L 4.50 9.54 L 5.00 7.93 L 5.50 6.04 L 6.00 4.29 L 6.50 3.06 L 7.00 2.62 L 7.50 3.06 L 8.00 4.29 L 8.50 6.04 L 9.00 7.93 L 9.50 9.54 L 10.00 10.53 L 10.50 10.68 L 11.00 9.95 L 11.50 8.51 L 12.00 6.67 L 12.50 4.83 L 13.00 3.39 L 13.50 2.67 L 14.00 2.81 L 14.50 3.80 L 15.00 5.42 L 15.50 7.31 L 16.00 9.06 L 16.50 10.29 L 17.00 10.73 L 17.50 10.29 L 18.00 9.06 L 18.50 7.31 L 19.00 5.42 L 19.50 3.80 L 20.00 2.81 L 20.50 2.67 L 21.00 3.39 L 21.50 4.83 L 22.00 6.67" />
      {children}
    </svg>
  );
});

export default TriploJunior;
