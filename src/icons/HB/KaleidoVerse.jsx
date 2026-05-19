import React from 'react';

export const iconData = {
  "id": "KaleidoVerse",
  "name": "KaleidoVerse",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.96 20.18 L 2.66 9.74 L 11.27 2.42 L 20.88 8.34 L 18.23 19.32 Z"
      }
    ]
  ]
};

export const KaleidoVerse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.96 20.18 L 2.66 9.74 L 11.27 2.42 L 20.88 8.34 L 18.23 19.32 Z" />
      {children}
    </svg>
  );
});

export default KaleidoVerse;
