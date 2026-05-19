import React from 'react';

export const iconData = {
  "id": "TarsioLean",
  "name": "TarsioLean",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.50 17.86 L 4.45 16.19 L 7.42 15.13 L 8.55 15.52 L 8.10 13.47 L 9.67 15.75 L 10.97 15.61 L 13.88 17.82 L 12.82 16.75 L 10.37 19.46 L 7.42 18.38 L 10.12 21.00 L 9.61 22.89 L 12.45 21.36 L 11.71 19.12 L 13.20 20.98 L 13.45 22.64 L 11.68 19.92 L 14.25 20.02 L 15.20 21.63"
      }
    ]
  ]
};

export const TarsioLean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.50 17.86 L 4.45 16.19 L 7.42 15.13 L 8.55 15.52 L 8.10 13.47 L 9.67 15.75 L 10.97 15.61 L 13.88 17.82 L 12.82 16.75 L 10.37 19.46 L 7.42 18.38 L 10.12 21.00 L 9.61 22.89 L 12.45 21.36 L 11.71 19.12 L 13.20 20.98 L 13.45 22.64 L 11.68 19.92 L 14.25 20.02 L 15.20 21.63" />
      {children}
    </svg>
  );
});

export default TarsioLean;
