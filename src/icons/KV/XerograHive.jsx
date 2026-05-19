import React from 'react';

export const iconData = {
  "id": "XerograHive",
  "name": "XerograHive",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.20 21.77 L 10.67 15.94 L 5.11 19.03 L 8.09 13.42 L 2.21 11.00 L 8.45 9.82 L 6.68 3.72 L 11.49 7.87 L 15.15 2.68 L 14.91 9.03 L 21.25 8.65 L 16.14 12.42 L 20.39 17.15 L 14.25 15.50 Z"
      }
    ]
  ]
};

export const XerograHive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.20 21.77 L 10.67 15.94 L 5.11 19.03 L 8.09 13.42 L 2.21 11.00 L 8.45 9.82 L 6.68 3.72 L 11.49 7.87 L 15.15 2.68 L 14.91 9.03 L 21.25 8.65 L 16.14 12.42 L 20.39 17.15 L 14.25 15.50 Z" />
      {children}
    </svg>
  );
});

export default XerograHive;
