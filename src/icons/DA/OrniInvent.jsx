import React from 'react';

export const iconData = {
  "id": "OrniInvent",
  "name": "OrniInvent",
  "category": "DA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.53 L 2.50 10.53 L 3.00 12.88 L 3.50 14.07 L 4.00 13.82 L 4.50 12.21 L 5.00 9.57 L 5.50 6.49 L 6.00 3.64 L 6.50 1.63 L 7.00 0.91 L 7.50 1.63 L 8.00 3.64 L 8.50 6.49 L 9.00 9.57 L 9.50 12.21 L 10.00 13.82 L 10.50 14.07 L 11.00 12.88 L 11.50 10.53 L 12.00 7.53 L 12.50 4.52 L 13.00 2.17 L 13.50 0.99 L 14.00 1.23 L 14.50 2.85 L 15.00 5.48 L 15.50 8.56 L 16.00 11.42 L 16.50 13.43 L 17.00 14.15 L 17.50 13.43 L 18.00 11.42 L 18.50 8.56 L 19.00 5.48 L 19.50 2.85 L 20.00 1.23 L 20.50 0.99 L 21.00 2.17 L 21.50 4.52 L 22.00 7.53"
      }
    ]
  ]
};

export const OrniInvent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.53 L 2.50 10.53 L 3.00 12.88 L 3.50 14.07 L 4.00 13.82 L 4.50 12.21 L 5.00 9.57 L 5.50 6.49 L 6.00 3.64 L 6.50 1.63 L 7.00 0.91 L 7.50 1.63 L 8.00 3.64 L 8.50 6.49 L 9.00 9.57 L 9.50 12.21 L 10.00 13.82 L 10.50 14.07 L 11.00 12.88 L 11.50 10.53 L 12.00 7.53 L 12.50 4.52 L 13.00 2.17 L 13.50 0.99 L 14.00 1.23 L 14.50 2.85 L 15.00 5.48 L 15.50 8.56 L 16.00 11.42 L 16.50 13.43 L 17.00 14.15 L 17.50 13.43 L 18.00 11.42 L 18.50 8.56 L 19.00 5.48 L 19.50 2.85 L 20.00 1.23 L 20.50 0.99 L 21.00 2.17 L 21.50 4.52 L 22.00 7.53" />
      {children}
    </svg>
  );
});

export default OrniInvent;
