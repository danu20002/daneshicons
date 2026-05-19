import React from 'react';

export const iconData = {
  "id": "VegliaPavilion",
  "name": "VegliaPavilion",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 16.32 L 5.47 18.77 L 5.01 20.00 L 7.47 21.75 L 6.33 23.00 L 6.68 23.00 L 9.53 23.00 L 6.86 22.50 L 4.45 23.00 L 4.41 23.00 L 5.26 21.84 L 2.73 22.19 L 2.87 23.00 L 4.10 23.00 L 2.87 23.00 L 4.75 23.00 L 3.86 21.44 L 6.38 23.00"
      }
    ]
  ]
};

export const VegliaPavilion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 16.32 L 5.47 18.77 L 5.01 20.00 L 7.47 21.75 L 6.33 23.00 L 6.68 23.00 L 9.53 23.00 L 6.86 22.50 L 4.45 23.00 L 4.41 23.00 L 5.26 21.84 L 2.73 22.19 L 2.87 23.00 L 4.10 23.00 L 2.87 23.00 L 4.75 23.00 L 3.86 21.44 L 6.38 23.00" />
      {children}
    </svg>
  );
});

export default VegliaPavilion;
