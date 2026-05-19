import React from 'react';

export const iconData = {
  "id": "LumenHerd",
  "name": "LumenHerd",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.21 17.40 L 12.74 15.77 L 9.84 16.86 L 8.38 14.33 L 7.46 12.08 L 6.62 9.71 L 9.18 7.31 L 11.31 9.14 L 11.97 6.16 L 11.43 5.34 L 9.26 3.63 L 10.14 5.75 L 11.72 3.64 L 11.34 6.48 L 13.40 4.68 L 12.98 6.67"
      }
    ]
  ]
};

export const LumenHerd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.21 17.40 L 12.74 15.77 L 9.84 16.86 L 8.38 14.33 L 7.46 12.08 L 6.62 9.71 L 9.18 7.31 L 11.31 9.14 L 11.97 6.16 L 11.43 5.34 L 9.26 3.63 L 10.14 5.75 L 11.72 3.64 L 11.34 6.48 L 13.40 4.68 L 12.98 6.67" />
      {children}
    </svg>
  );
});

export default LumenHerd;
