import React from 'react';

export const iconData = {
  "id": "VermiglioLeisure",
  "name": "VermiglioLeisure",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.01 21.84 L 8.46 16.32 L 2.93 16.85 L 6.44 12.55 L 2.16 9.01 L 7.68 8.46 L 7.15 2.93 L 11.45 6.44 L 14.99 2.16 L 15.54 7.68 L 21.07 7.15 L 17.56 11.45 L 21.84 14.99 L 16.32 15.54 L 16.85 21.07 L 12.55 17.56 Z"
      }
    ]
  ]
};

export const VermiglioLeisure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.01 21.84 L 8.46 16.32 L 2.93 16.85 L 6.44 12.55 L 2.16 9.01 L 7.68 8.46 L 7.15 2.93 L 11.45 6.44 L 14.99 2.16 L 15.54 7.68 L 21.07 7.15 L 17.56 11.45 L 21.84 14.99 L 16.32 15.54 L 16.85 21.07 L 12.55 17.56 Z" />
      {children}
    </svg>
  );
});

export default VermiglioLeisure;
