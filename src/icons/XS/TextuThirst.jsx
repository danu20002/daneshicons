import React from 'react';

export const iconData = {
  "id": "TextuThirst",
  "name": "TextuThirst",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.55 16.46 L 19.66 17.19 L 19.39 20.04 L 19.82 21.68 L 17.61 23.00 L 19.44 22.15 L 21.21 20.58 L 21.25 21.54 L 21.51 22.95 L 19.22 23.00 L 19.00 21.60 L 19.40 21.56 L 22.26 23.00 L 19.82 23.00 L 18.92 20.20 L 16.97 21.20 L 14.49 19.90 L 12.02 20.83 L 9.38 19.59 L 8.61 19.93 L 10.46 16.98 L 7.67 14.66 L 5.24 16.01 L 6.25 18.67 L 7.15 17.89 L 4.84 18.69 L 6.72 19.24 L 7.91 19.74 L 6.38 21.41"
      }
    ]
  ]
};

export const TextuThirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.55 16.46 L 19.66 17.19 L 19.39 20.04 L 19.82 21.68 L 17.61 23.00 L 19.44 22.15 L 21.21 20.58 L 21.25 21.54 L 21.51 22.95 L 19.22 23.00 L 19.00 21.60 L 19.40 21.56 L 22.26 23.00 L 19.82 23.00 L 18.92 20.20 L 16.97 21.20 L 14.49 19.90 L 12.02 20.83 L 9.38 19.59 L 8.61 19.93 L 10.46 16.98 L 7.67 14.66 L 5.24 16.01 L 6.25 18.67 L 7.15 17.89 L 4.84 18.69 L 6.72 19.24 L 7.91 19.74 L 6.38 21.41" />
      {children}
    </svg>
  );
});

export default TextuThirst;
