import React from 'react';

export const iconData = {
  "id": "MisoSubtle",
  "name": "MisoSubtle",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.57 21.77 L 4.72 18.54 L 2.35 10.39 L 7.24 3.45 L 15.72 2.95 L 21.40 9.27 L 20.00 17.64 Z"
      }
    ]
  ]
};

export const MisoSubtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.57 21.77 L 4.72 18.54 L 2.35 10.39 L 7.24 3.45 L 15.72 2.95 L 21.40 9.27 L 20.00 17.64 Z" />
      {children}
    </svg>
  );
});

export default MisoSubtle;
