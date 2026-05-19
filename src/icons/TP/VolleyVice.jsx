import React from 'react';

export const iconData = {
  "id": "VolleyVice",
  "name": "VolleyVice",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 5.51 L 9.30 7.54 L 10.33 1.16 L 13.24 6.94 L 18.49 3.15 L 16.46 9.30 L 22.84 10.33 L 17.06 13.24 L 20.85 18.49 L 14.70 16.46 L 13.67 22.84 L 10.76 17.06 L 5.51 20.85 L 7.54 14.70 L 1.16 13.67 L 6.94 10.76 Z"
      }
    ]
  ]
};

export const VolleyVice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 5.51 L 9.30 7.54 L 10.33 1.16 L 13.24 6.94 L 18.49 3.15 L 16.46 9.30 L 22.84 10.33 L 17.06 13.24 L 20.85 18.49 L 14.70 16.46 L 13.67 22.84 L 10.76 17.06 L 5.51 20.85 L 7.54 14.70 L 1.16 13.67 L 6.94 10.76 Z" />
      {children}
    </svg>
  );
});

export default VolleyVice;
