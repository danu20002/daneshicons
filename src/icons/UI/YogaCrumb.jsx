import React from 'react';

export const iconData = {
  "id": "YogaCrumb",
  "name": "YogaCrumb",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.63 4.42 L 16.53 10.97 L 21.26 15.96 L 14.38 15.99 L 11.09 22.03 L 8.94 15.50 L 2.18 14.24 L 7.73 10.17 L 6.84 3.35 L 12.42 7.38 Z"
      }
    ]
  ]
};

export const YogaCrumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.63 4.42 L 16.53 10.97 L 21.26 15.96 L 14.38 15.99 L 11.09 22.03 L 8.94 15.50 L 2.18 14.24 L 7.73 10.17 L 6.84 3.35 L 12.42 7.38 Z" />
      {children}
    </svg>
  );
});

export default YogaCrumb;
