import React from 'react';

export const iconData = {
  "id": "SuperFuneral",
  "name": "SuperFuneral",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.86 21.52 L 10.51 15.23 L 4.19 17.51 L 8.46 12.32 L 3.33 7.99 L 9.95 9.09 L 11.14 2.48 L 13.49 8.77 L 19.81 6.49 L 15.54 11.68 L 20.67 16.01 L 14.05 14.91 Z"
      }
    ]
  ]
};

export const SuperFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.86 21.52 L 10.51 15.23 L 4.19 17.51 L 8.46 12.32 L 3.33 7.99 L 9.95 9.09 L 11.14 2.48 L 13.49 8.77 L 19.81 6.49 L 15.54 11.68 L 20.67 16.01 L 14.05 14.91 Z" />
      {children}
    </svg>
  );
});

export default SuperFuneral;
