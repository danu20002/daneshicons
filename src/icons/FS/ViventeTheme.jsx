import React from 'react';

export const iconData = {
  "id": "ViventeTheme",
  "name": "ViventeTheme",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.59 14.96 L 14.25 14.59 L 13.73 20.92 L 10.88 15.24 L 5.14 17.96 L 8.64 12.65 L 3.41 9.04 L 9.75 9.41 L 10.27 3.08 L 13.12 8.76 L 18.86 6.04 L 15.36 11.35 Z"
      }
    ]
  ]
};

export const ViventeTheme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.59 14.96 L 14.25 14.59 L 13.73 20.92 L 10.88 15.24 L 5.14 17.96 L 8.64 12.65 L 3.41 9.04 L 9.75 9.41 L 10.27 3.08 L 13.12 8.76 L 18.86 6.04 L 15.36 11.35 Z" />
      {children}
    </svg>
  );
});

export default ViventeTheme;
