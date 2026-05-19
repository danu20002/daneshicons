import React from 'react';

export const iconData = {
  "id": "UtileTriumph",
  "name": "UtileTriumph",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.07 19.91 L 7.32 14.49 L 2.69 11.68 L 7.50 9.19 L 7.62 3.78 L 12.18 6.70 L 16.93 4.09 L 16.68 9.51 L 21.31 12.32 L 16.50 14.81 L 16.38 20.22 L 11.82 17.30 Z"
      }
    ]
  ]
};

export const UtileTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.07 19.91 L 7.32 14.49 L 2.69 11.68 L 7.50 9.19 L 7.62 3.78 L 12.18 6.70 L 16.93 4.09 L 16.68 9.51 L 21.31 12.32 L 16.50 14.81 L 16.38 20.22 L 11.82 17.30 Z" />
      {children}
    </svg>
  );
});

export default UtileTriumph;
