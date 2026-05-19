import React from 'react';

export const iconData = {
  "id": "VersaleVacuum",
  "name": "VersaleVacuum",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.17 2.97 L 21.33 8.56 L 21.03 16.17 L 15.44 21.33 L 7.83 21.03 L 2.67 15.44 L 2.97 7.83 L 8.56 2.67 Z"
      }
    ]
  ]
};

export const VersaleVacuum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.17 2.97 L 21.33 8.56 L 21.03 16.17 L 15.44 21.33 L 7.83 21.03 L 2.67 15.44 L 2.97 7.83 L 8.56 2.67 Z" />
      {children}
    </svg>
  );
});

export default VersaleVacuum;
