import React from 'react';

export const iconData = {
  "id": "TocoGale",
  "name": "TocoGale",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.69 17.52 L 14.11 15.01 L 14.25 22.05 L 11.37 15.62 L 6.48 20.69 L 8.99 14.11 L 1.95 14.25 L 8.38 11.37 L 3.31 6.48 L 9.89 8.99 L 9.75 1.95 L 12.63 8.38 L 17.52 3.31 L 15.01 9.89 L 22.05 9.75 L 15.62 12.63 Z"
      }
    ]
  ]
};

export const TocoGale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.69 17.52 L 14.11 15.01 L 14.25 22.05 L 11.37 15.62 L 6.48 20.69 L 8.99 14.11 L 1.95 14.25 L 8.38 11.37 L 3.31 6.48 L 9.89 8.99 L 9.75 1.95 L 12.63 8.38 L 17.52 3.31 L 15.01 9.89 L 22.05 9.75 L 15.62 12.63 Z" />
      {children}
    </svg>
  );
});

export default TocoGale;
