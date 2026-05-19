import React from 'react';

export const iconData = {
  "id": "VividoDwarf",
  "name": "VividoDwarf",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 11.61 L 17.79 18.63 L 10.42 20.66 L 4.25 16.17 L 3.91 8.54 L 9.66 3.51 L 17.18 4.88 Z"
      }
    ]
  ]
};

export const VividoDwarf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 11.61 L 17.79 18.63 L 10.42 20.66 L 4.25 16.17 L 3.91 8.54 L 9.66 3.51 L 17.18 4.88 Z" />
      {children}
    </svg>
  );
});

export default VividoDwarf;
