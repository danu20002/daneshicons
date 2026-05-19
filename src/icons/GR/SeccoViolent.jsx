import React from 'react';

export const iconData = {
  "id": "SeccoViolent",
  "name": "SeccoViolent",
  "category": "GR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.79 L 2.50 9.35 L 3.00 10.57 L 3.50 11.18 L 4.00 11.05 L 4.50 10.22 L 5.00 8.85 L 5.50 7.26 L 6.00 5.78 L 6.50 4.74 L 7.00 4.37 L 7.50 4.74 L 8.00 5.78 L 8.50 7.26 L 9.00 8.85 L 9.50 10.22 L 10.00 11.05 L 10.50 11.18 L 11.00 10.57 L 11.50 9.35 L 12.00 7.79 L 12.50 6.24 L 13.00 5.02 L 13.50 4.41 L 14.00 4.54 L 14.50 5.37 L 15.00 6.74 L 15.50 8.33 L 16.00 9.81 L 16.50 10.85 L 17.00 11.22 L 17.50 10.85 L 18.00 9.81 L 18.50 8.33 L 19.00 6.74 L 19.50 5.37 L 20.00 4.54 L 20.50 4.41 L 21.00 5.02 L 21.50 6.24 L 22.00 7.79"
      }
    ]
  ]
};

export const SeccoViolent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.79 L 2.50 9.35 L 3.00 10.57 L 3.50 11.18 L 4.00 11.05 L 4.50 10.22 L 5.00 8.85 L 5.50 7.26 L 6.00 5.78 L 6.50 4.74 L 7.00 4.37 L 7.50 4.74 L 8.00 5.78 L 8.50 7.26 L 9.00 8.85 L 9.50 10.22 L 10.00 11.05 L 10.50 11.18 L 11.00 10.57 L 11.50 9.35 L 12.00 7.79 L 12.50 6.24 L 13.00 5.02 L 13.50 4.41 L 14.00 4.54 L 14.50 5.37 L 15.00 6.74 L 15.50 8.33 L 16.00 9.81 L 16.50 10.85 L 17.00 11.22 L 17.50 10.85 L 18.00 9.81 L 18.50 8.33 L 19.00 6.74 L 19.50 5.37 L 20.00 4.54 L 20.50 4.41 L 21.00 5.02 L 21.50 6.24 L 22.00 7.79" />
      {children}
    </svg>
  );
});

export default SeccoViolent;
