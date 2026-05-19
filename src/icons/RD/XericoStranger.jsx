import React from 'react';

export const iconData = {
  "id": "XericoStranger",
  "name": "XericoStranger",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.57 17.98 L 15.17 18.69 L 17.34 19.49 L 19.98 20.52 L 19.14 20.18 L 21.71 19.96 L 22.32 22.87 L 21.32 23.00 L 20.68 23.00 L 20.17 20.38 L 22.06 22.63 L 22.27 23.00 L 21.97 22.68 L 23.00 23.00 L 22.86 22.48 L 23.00 21.37 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 21.53 23.00 L 19.53 20.25"
      }
    ]
  ]
};

export const XericoStranger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.57 17.98 L 15.17 18.69 L 17.34 19.49 L 19.98 20.52 L 19.14 20.18 L 21.71 19.96 L 22.32 22.87 L 21.32 23.00 L 20.68 23.00 L 20.17 20.38 L 22.06 22.63 L 22.27 23.00 L 21.97 22.68 L 23.00 23.00 L 22.86 22.48 L 23.00 21.37 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 23.00 23.00 L 21.53 23.00 L 19.53 20.25" />
      {children}
    </svg>
  );
});

export default XericoStranger;
