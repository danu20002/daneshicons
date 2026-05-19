import React from 'react';

export const iconData = {
  "id": "TransRevise",
  "name": "TransRevise",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.16 21.61 L 6.73 20.33 L 2.39 14.16 L 3.67 6.73 L 9.84 2.39 L 17.27 3.67 L 21.61 9.84 L 20.33 17.27 Z"
      }
    ]
  ]
};

export const TransRevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.16 21.61 L 6.73 20.33 L 2.39 14.16 L 3.67 6.73 L 9.84 2.39 L 17.27 3.67 L 21.61 9.84 L 20.33 17.27 Z" />
      {children}
    </svg>
  );
});

export default TransRevise;
