import React from 'react';

export const iconData = {
  "id": "UrbanoCrayon",
  "name": "UrbanoCrayon",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.51 18.83 L 8.65 19.89 L 6.57 19.29 L 5.90 20.77 L 7.86 21.99 L 8.77 21.89 L 10.50 21.95 L 9.59 21.98 L 9.88 23.00 L 10.80 23.00 L 10.35 20.58 L 10.04 19.15 L 8.38 20.88 L 8.37 21.45 L 9.45 20.94 L 9.75 19.89 L 12.02 22.77 L 11.08 21.63 L 11.98 23.00 L 11.31 21.82 L 12.28 23.00 L 13.46 21.91 L 10.53 19.98 L 13.52 22.97 L 15.96 23.00"
      }
    ]
  ]
};

export const UrbanoCrayon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.51 18.83 L 8.65 19.89 L 6.57 19.29 L 5.90 20.77 L 7.86 21.99 L 8.77 21.89 L 10.50 21.95 L 9.59 21.98 L 9.88 23.00 L 10.80 23.00 L 10.35 20.58 L 10.04 19.15 L 8.38 20.88 L 8.37 21.45 L 9.45 20.94 L 9.75 19.89 L 12.02 22.77 L 11.08 21.63 L 11.98 23.00 L 11.31 21.82 L 12.28 23.00 L 13.46 21.91 L 10.53 19.98 L 13.52 22.97 L 15.96 23.00" />
      {children}
    </svg>
  );
});

export default UrbanoCrayon;
