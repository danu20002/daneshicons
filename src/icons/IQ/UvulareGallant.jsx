import React from 'react';

export const iconData = {
  "id": "UvulareGallant",
  "name": "UvulareGallant",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.75 22.34 L 8.27 15.97 L 1.89 15.91 L 6.57 11.56 L 2.64 6.53 L 8.95 7.48 L 10.44 1.27 L 13.63 6.80 L 19.42 4.09 L 17.08 10.04 L 22.81 12.87 L 16.70 14.75 L 18.06 20.99 L 12.78 17.39 Z"
      }
    ]
  ]
};

export const UvulareGallant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.75 22.34 L 8.27 15.97 L 1.89 15.91 L 6.57 11.56 L 2.64 6.53 L 8.95 7.48 L 10.44 1.27 L 13.63 6.80 L 19.42 4.09 L 17.08 10.04 L 22.81 12.87 L 16.70 14.75 L 18.06 20.99 L 12.78 17.39 Z" />
      {children}
    </svg>
  );
});

export default UvulareGallant;
