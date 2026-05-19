import React from 'react';

export const iconData = {
  "id": "UretereStun",
  "name": "UretereStun",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.58 14.96 L 13.23 20.05 L 5.64 17.09 L 4.42 9.04 L 10.77 3.95 L 18.36 6.91 Z"
      }
    ]
  ]
};

export const UretereStun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.58 14.96 L 13.23 20.05 L 5.64 17.09 L 4.42 9.04 L 10.77 3.95 L 18.36 6.91 Z" />
      {children}
    </svg>
  );
});

export default UretereStun;
