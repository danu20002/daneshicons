import React from 'react';

export const iconData = {
  "id": "MultiWaffle",
  "name": "MultiWaffle",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.43 6.85 L 12.63 4.17 L 11.41 5.92 L 9.64 8.33 L 10.78 7.21 L 11.33 9.16 L 11.50 10.96 L 12.94 12.82 L 11.91 15.68 L 14.76 17.07 L 14.86 19.64 L 12.53 18.28 L 14.01 17.35 L 16.72 17.63 L 13.73 19.81 L 14.76 20.07"
      }
    ]
  ]
};

export const MultiWaffle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.43 6.85 L 12.63 4.17 L 11.41 5.92 L 9.64 8.33 L 10.78 7.21 L 11.33 9.16 L 11.50 10.96 L 12.94 12.82 L 11.91 15.68 L 14.76 17.07 L 14.86 19.64 L 12.53 18.28 L 14.01 17.35 L 16.72 17.63 L 13.73 19.81 L 14.76 20.07" />
      {children}
    </svg>
  );
});

export default MultiWaffle;
