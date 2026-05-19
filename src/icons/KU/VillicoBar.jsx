import React from 'react';

export const iconData = {
  "id": "VillicoBar",
  "name": "VillicoBar",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.38 18.63 L 10.17 20.34 L 4.34 15.77 L 4.27 8.36 L 10.02 3.69 L 17.27 5.27 L 20.54 11.92 Z"
      }
    ]
  ]
};

export const VillicoBar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.38 18.63 L 10.17 20.34 L 4.34 15.77 L 4.27 8.36 L 10.02 3.69 L 17.27 5.27 L 20.54 11.92 Z" />
      {children}
    </svg>
  );
});

export default VillicoBar;
