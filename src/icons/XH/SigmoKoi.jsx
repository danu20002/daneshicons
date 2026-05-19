import React from 'react';

export const iconData = {
  "id": "SigmoKoi",
  "name": "SigmoKoi",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 18.67 L 7.53 12.69 L 2.07 8.15 L 9.17 8.47 L 10.37 1.48 L 13.64 7.78 L 20.30 5.33 L 16.47 11.31 L 21.93 15.85 L 14.83 15.53 L 13.63 22.52 L 10.36 16.22 Z"
      }
    ]
  ]
};

export const SigmoKoi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 18.67 L 7.53 12.69 L 2.07 8.15 L 9.17 8.47 L 10.37 1.48 L 13.64 7.78 L 20.30 5.33 L 16.47 11.31 L 21.93 15.85 L 14.83 15.53 L 13.63 22.52 L 10.36 16.22 Z" />
      {children}
    </svg>
  );
});

export default SigmoKoi;
