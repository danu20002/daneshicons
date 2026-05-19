import React from 'react';

export const iconData = {
  "id": "MycoSpec",
  "name": "MycoSpec",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 11.67 L 20.43 10.56 L 20.69 9.54 L 21.54 8.77 L 23.00 8.99 L 23.00 7.57 L 22.96 6.20 L 23.00 8.79 L 23.00 6.26 L 22.80 6.66 L 23.00 4.08 L 23.00 2.73 L 20.10 2.96 L 20.36 5.03 L 17.79 4.81 L 20.27 5.51 L 23.00 7.85 L 23.00 6.11 L 23.00 6.56 L 22.16 4.92 L 19.20 2.47 L 19.48 4.42 L 21.12 3.05 L 18.71 4.84 L 19.88 2.91"
      }
    ]
  ]
};

export const MycoSpec = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 11.67 L 20.43 10.56 L 20.69 9.54 L 21.54 8.77 L 23.00 8.99 L 23.00 7.57 L 22.96 6.20 L 23.00 8.79 L 23.00 6.26 L 22.80 6.66 L 23.00 4.08 L 23.00 2.73 L 20.10 2.96 L 20.36 5.03 L 17.79 4.81 L 20.27 5.51 L 23.00 7.85 L 23.00 6.11 L 23.00 6.56 L 22.16 4.92 L 19.20 2.47 L 19.48 4.42 L 21.12 3.05 L 18.71 4.84 L 19.88 2.91" />
      {children}
    </svg>
  );
});

export default MycoSpec;
