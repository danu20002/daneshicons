import React from 'react';

export const iconData = {
  "id": "KryptoStool",
  "name": "KryptoStool",
  "category": "IW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.00 L 2.50 8.85 L 3.00 9.99 L 3.50 9.99 L 4.00 8.85 L 4.50 7.00 L 5.00 5.15 L 5.50 4.00 L 6.00 4.00 L 6.50 5.15 L 7.00 7.00 L 7.50 8.85 L 8.00 9.99 L 8.50 9.99 L 9.00 8.85 L 9.50 7.00 L 10.00 5.15 L 10.50 4.00 L 11.00 4.00 L 11.50 5.15 L 12.00 7.00 L 12.50 8.85 L 13.00 9.99 L 13.50 9.99 L 14.00 8.85 L 14.50 7.00 L 15.00 5.15 L 15.50 4.00 L 16.00 4.00 L 16.50 5.15 L 17.00 7.00 L 17.50 8.85 L 18.00 9.99 L 18.50 9.99 L 19.00 8.85 L 19.50 7.00 L 20.00 5.15 L 20.50 4.00 L 21.00 4.00 L 21.50 5.15 L 22.00 7.00"
      }
    ]
  ]
};

export const KryptoStool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.00 L 2.50 8.85 L 3.00 9.99 L 3.50 9.99 L 4.00 8.85 L 4.50 7.00 L 5.00 5.15 L 5.50 4.00 L 6.00 4.00 L 6.50 5.15 L 7.00 7.00 L 7.50 8.85 L 8.00 9.99 L 8.50 9.99 L 9.00 8.85 L 9.50 7.00 L 10.00 5.15 L 10.50 4.00 L 11.00 4.00 L 11.50 5.15 L 12.00 7.00 L 12.50 8.85 L 13.00 9.99 L 13.50 9.99 L 14.00 8.85 L 14.50 7.00 L 15.00 5.15 L 15.50 4.00 L 16.00 4.00 L 16.50 5.15 L 17.00 7.00 L 17.50 8.85 L 18.00 9.99 L 18.50 9.99 L 19.00 8.85 L 19.50 7.00 L 20.00 5.15 L 20.50 4.00 L 21.00 4.00 L 21.50 5.15 L 22.00 7.00" />
      {children}
    </svg>
  );
});

export default KryptoStool;
