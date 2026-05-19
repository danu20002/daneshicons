import React from 'react';

export const iconData = {
  "id": "MycoTelegram",
  "name": "MycoTelegram",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.60 7.63 L 15.12 13.17 L 16.37 21.60 L 10.83 15.12 L 2.40 16.37 L 8.88 10.83 L 7.63 2.40 L 13.17 8.88 Z"
      }
    ]
  ]
};

export const MycoTelegram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.60 7.63 L 15.12 13.17 L 16.37 21.60 L 10.83 15.12 L 2.40 16.37 L 8.88 10.83 L 7.63 2.40 L 13.17 8.88 Z" />
      {children}
    </svg>
  );
});

export default MycoTelegram;
