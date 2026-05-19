import React from 'react';

export const iconData = {
  "id": "GalvoRansom",
  "name": "GalvoRansom",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.56 13.47 L 20.21 14.06 L 22.42 11.83 L 23.00 11.25 L 22.36 10.60 L 22.89 7.62 L 22.57 9.38 L 22.28 10.99 L 23.00 12.78 L 20.31 13.26 L 19.72 14.21 L 19.94 11.54 L 17.60 9.53 L 20.54 8.33 L 20.49 10.69 L 19.45 10.97 L 21.00 13.00 L 18.11 13.72 L 15.25 12.55 L 14.25 10.12"
      }
    ]
  ]
};

export const GalvoRansom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.56 13.47 L 20.21 14.06 L 22.42 11.83 L 23.00 11.25 L 22.36 10.60 L 22.89 7.62 L 22.57 9.38 L 22.28 10.99 L 23.00 12.78 L 20.31 13.26 L 19.72 14.21 L 19.94 11.54 L 17.60 9.53 L 20.54 8.33 L 20.49 10.69 L 19.45 10.97 L 21.00 13.00 L 18.11 13.72 L 15.25 12.55 L 14.25 10.12" />
      {children}
    </svg>
  );
});

export default GalvoRansom;
