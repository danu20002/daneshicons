import React from 'react';

export const iconData = {
  "id": "LithoPace",
  "name": "LithoPace",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 21.13 L 8.14 15.97 L 2.94 14.57 L 6.63 10.64 L 5.24 5.43 L 10.49 6.67 L 14.31 2.87 L 15.86 8.03 L 21.06 9.43 L 17.37 13.36 L 18.76 18.57 L 13.51 17.33 Z"
      }
    ]
  ]
};

export const LithoPace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 21.13 L 8.14 15.97 L 2.94 14.57 L 6.63 10.64 L 5.24 5.43 L 10.49 6.67 L 14.31 2.87 L 15.86 8.03 L 21.06 9.43 L 17.37 13.36 L 18.76 18.57 L 13.51 17.33 Z" />
      {children}
    </svg>
  );
});

export default LithoPace;
