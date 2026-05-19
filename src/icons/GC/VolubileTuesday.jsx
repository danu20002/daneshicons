import React from 'react';

export const iconData = {
  "id": "VolubileTuesday",
  "name": "VolubileTuesday",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.32 13.85 10.50 7.85 Q 10.98 7.75 11.46 7.65 Q 14.87 5.72 18.29 3.80 Q 19.43 6.04 20.57 8.27 Q 12.36 14.06 4.15 19.85 Z"
      }
    ]
  ]
};

export const VolubileTuesday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.32 13.85 10.50 7.85 Q 10.98 7.75 11.46 7.65 Q 14.87 5.72 18.29 3.80 Q 19.43 6.04 20.57 8.27 Q 12.36 14.06 4.15 19.85 Z" />
      {children}
    </svg>
  );
});

export default VolubileTuesday;
