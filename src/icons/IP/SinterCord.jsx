import React from 'react';

export const iconData = {
  "id": "SinterCord",
  "name": "SinterCord",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.00 13.69 L 17.16 19.56 L 10.31 21.00 L 4.44 17.16 L 3.00 10.31 L 6.84 4.44 L 13.69 3.00 L 19.56 6.84 Z"
      }
    ]
  ]
};

export const SinterCord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.00 13.69 L 17.16 19.56 L 10.31 21.00 L 4.44 17.16 L 3.00 10.31 L 6.84 4.44 L 13.69 3.00 L 19.56 6.84 Z" />
      {children}
    </svg>
  );
});

export default SinterCord;
