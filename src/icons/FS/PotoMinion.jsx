import React from 'react';

export const iconData = {
  "id": "PotoMinion",
  "name": "PotoMinion",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.55 17.23 L 14.54 15.93 L 13.65 21.04 L 11.01 16.58 L 6.77 19.55 L 8.07 14.54 L 2.96 13.65 L 7.42 11.01 L 4.45 6.77 L 9.46 8.07 L 10.35 2.96 L 12.99 7.42 L 17.23 4.45 L 15.93 9.46 L 21.04 10.35 L 16.58 12.99 Z"
      }
    ]
  ]
};

export const PotoMinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.55 17.23 L 14.54 15.93 L 13.65 21.04 L 11.01 16.58 L 6.77 19.55 L 8.07 14.54 L 2.96 13.65 L 7.42 11.01 L 4.45 6.77 L 9.46 8.07 L 10.35 2.96 L 12.99 7.42 L 17.23 4.45 L 15.93 9.46 L 21.04 10.35 L 16.58 12.99 Z" />
      {children}
    </svg>
  );
});

export default PotoMinion;
