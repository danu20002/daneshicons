import React from 'react';

export const iconData = {
  "id": "ZoticoMenu",
  "name": "ZoticoMenu",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 20.44 L 6.96 13.91 L 2.26 9.35 L 8.62 7.80 L 11.51 1.92 L 14.95 7.49 L 21.43 8.42 L 17.21 13.41 L 18.32 19.86 L 12.26 17.39 Z"
      }
    ]
  ]
};

export const ZoticoMenu = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 20.44 L 6.96 13.91 L 2.26 9.35 L 8.62 7.80 L 11.51 1.92 L 14.95 7.49 L 21.43 8.42 L 17.21 13.41 L 18.32 19.86 L 12.26 17.39 Z" />
      {children}
    </svg>
  );
});

export default ZoticoMenu;
