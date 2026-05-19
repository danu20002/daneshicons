import React from 'react';

export const iconData = {
  "id": "VietatoPrairie",
  "name": "VietatoPrairie",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 8.59 L 17.88 13.15 L 19.94 18.92 L 13.94 17.67 L 9.98 22.33 L 8.06 16.52 L 2.04 15.41 L 6.12 10.85 L 4.06 5.08 L 10.06 6.33 L 14.02 1.67 L 15.94 7.48 Z"
      }
    ]
  ]
};

export const VietatoPrairie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 8.59 L 17.88 13.15 L 19.94 18.92 L 13.94 17.67 L 9.98 22.33 L 8.06 16.52 L 2.04 15.41 L 6.12 10.85 L 4.06 5.08 L 10.06 6.33 L 14.02 1.67 L 15.94 7.48 Z" />
      {children}
    </svg>
  );
});

export default VietatoPrairie;
