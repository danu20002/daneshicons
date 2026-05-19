import React from 'react';

export const iconData = {
  "id": "VescicaHead",
  "name": "VescicaHead",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.18 3.73 L 20.23 10.56 L 15.91 19.38 L 6.19 18.00 L 4.50 8.33 Z"
      }
    ]
  ]
};

export const VescicaHead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.18 3.73 L 20.23 10.56 L 15.91 19.38 L 6.19 18.00 L 4.50 8.33 Z" />
      {children}
    </svg>
  );
});

export default VescicaHead;
