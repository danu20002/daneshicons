import React from 'react';

export const iconData = {
  "id": "YttriumGram",
  "name": "YttriumGram",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.98 5.41 L 17.22 11.33 L 20.42 16.61 L 14.25 16.75 L 10.22 21.43 L 8.17 15.61 L 2.48 13.22 L 7.39 9.48 L 7.89 3.32 L 12.97 6.83 Z"
      }
    ]
  ]
};

export const YttriumGram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.98 5.41 L 17.22 11.33 L 20.42 16.61 L 14.25 16.75 L 10.22 21.43 L 8.17 15.61 L 2.48 13.22 L 7.39 9.48 L 7.89 3.32 L 12.97 6.83 Z" />
      {children}
    </svg>
  );
});

export default YttriumGram;
