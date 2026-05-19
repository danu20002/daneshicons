import React from 'react';

export const iconData = {
  "id": "CalciSecret",
  "name": "CalciSecret",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.03 20.64 L 8.80 13.43 L 2.24 9.94 L 9.65 9.40 L 10.94 2.09 L 13.75 8.96 L 21.10 7.93 L 15.43 12.72 L 18.68 19.40 L 12.37 15.49 Z"
      }
    ]
  ]
};

export const CalciSecret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.03 20.64 L 8.80 13.43 L 2.24 9.94 L 9.65 9.40 L 10.94 2.09 L 13.75 8.96 L 21.10 7.93 L 15.43 12.72 L 18.68 19.40 L 12.37 15.49 Z" />
      {children}
    </svg>
  );
});

export default CalciSecret;
