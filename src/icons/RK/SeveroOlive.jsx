import React from 'react';

export const iconData = {
  "id": "SeveroOlive",
  "name": "SeveroOlive",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.59 2.86 L 14.70 10.53 L 22.71 12.27 L 14.63 13.61 L 17.12 21.41 L 11.92 15.08 L 6.41 21.14 L 9.30 13.47 L 1.29 11.73 L 9.37 10.39 L 6.88 2.59 L 12.08 8.92 Z"
      }
    ]
  ]
};

export const SeveroOlive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.59 2.86 L 14.70 10.53 L 22.71 12.27 L 14.63 13.61 L 17.12 21.41 L 11.92 15.08 L 6.41 21.14 L 9.30 13.47 L 1.29 11.73 L 9.37 10.39 L 6.88 2.59 L 12.08 8.92 Z" />
      {children}
    </svg>
  );
});

export default SeveroOlive;
