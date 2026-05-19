import React from 'react';

export const iconData = {
  "id": "NovoHub",
  "name": "NovoHub",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 19.88 L 3.45 18.00 L 1.00 19.44 L 1.00 21.97 L 1.16 20.42 L 3.72 20.09 L 4.22 18.69 L 6.50 17.69 L 5.18 15.93 L 6.28 17.40 L 4.16 16.96 L 6.55 18.64 L 5.58 19.90 L 8.01 19.22 L 8.76 20.08 L 11.40 17.94 L 8.80 18.37"
      }
    ]
  ]
};

export const NovoHub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 19.88 L 3.45 18.00 L 1.00 19.44 L 1.00 21.97 L 1.16 20.42 L 3.72 20.09 L 4.22 18.69 L 6.50 17.69 L 5.18 15.93 L 6.28 17.40 L 4.16 16.96 L 6.55 18.64 L 5.58 19.90 L 8.01 19.22 L 8.76 20.08 L 11.40 17.94 L 8.80 18.37" />
      {children}
    </svg>
  );
});

export default NovoHub;
