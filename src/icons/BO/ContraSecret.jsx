import React from 'react';

export const iconData = {
  "id": "ContraSecret",
  "name": "ContraSecret",
  "category": "BO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.68 L 2.50 11.32 L 3.00 13.57 L 3.50 13.57 L 4.00 11.32 L 4.50 7.68 L 5.00 4.03 L 5.50 1.78 L 6.00 1.78 L 6.50 4.03 L 7.00 7.68 L 7.50 11.32 L 8.00 13.57 L 8.50 13.57 L 9.00 11.32 L 9.50 7.68 L 10.00 4.03 L 10.50 1.78 L 11.00 1.78 L 11.50 4.03 L 12.00 7.68 L 12.50 11.32 L 13.00 13.57 L 13.50 13.57 L 14.00 11.32 L 14.50 7.68 L 15.00 4.03 L 15.50 1.78 L 16.00 1.78 L 16.50 4.03 L 17.00 7.68 L 17.50 11.32 L 18.00 13.57 L 18.50 13.57 L 19.00 11.32 L 19.50 7.68 L 20.00 4.03 L 20.50 1.78 L 21.00 1.78 L 21.50 4.03 L 22.00 7.68"
      }
    ]
  ]
};

export const ContraSecret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.68 L 2.50 11.32 L 3.00 13.57 L 3.50 13.57 L 4.00 11.32 L 4.50 7.68 L 5.00 4.03 L 5.50 1.78 L 6.00 1.78 L 6.50 4.03 L 7.00 7.68 L 7.50 11.32 L 8.00 13.57 L 8.50 13.57 L 9.00 11.32 L 9.50 7.68 L 10.00 4.03 L 10.50 1.78 L 11.00 1.78 L 11.50 4.03 L 12.00 7.68 L 12.50 11.32 L 13.00 13.57 L 13.50 13.57 L 14.00 11.32 L 14.50 7.68 L 15.00 4.03 L 15.50 1.78 L 16.00 1.78 L 16.50 4.03 L 17.00 7.68 L 17.50 11.32 L 18.00 13.57 L 18.50 13.57 L 19.00 11.32 L 19.50 7.68 L 20.00 4.03 L 20.50 1.78 L 21.00 1.78 L 21.50 4.03 L 22.00 7.68" />
      {children}
    </svg>
  );
});

export default ContraSecret;
