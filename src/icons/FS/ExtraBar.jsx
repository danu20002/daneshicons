import React from 'react';

export const iconData = {
  "id": "ExtraBar",
  "name": "ExtraBar",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.34 2.10 L 12.69 9.03 L 17.83 3.83 L 14.59 10.38 L 21.90 10.34 L 14.97 12.69 L 20.17 17.83 L 13.62 14.59 L 13.66 21.90 L 11.31 14.97 L 6.17 20.17 L 9.41 13.62 L 2.10 13.66 L 9.03 11.31 L 3.83 6.17 L 10.38 9.41 Z"
      }
    ]
  ]
};

export const ExtraBar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.34 2.10 L 12.69 9.03 L 17.83 3.83 L 14.59 10.38 L 21.90 10.34 L 14.97 12.69 L 20.17 17.83 L 13.62 14.59 L 13.66 21.90 L 11.31 14.97 L 6.17 20.17 L 9.41 13.62 L 2.10 13.66 L 9.03 11.31 L 3.83 6.17 L 10.38 9.41 Z" />
      {children}
    </svg>
  );
});

export default ExtraBar;
