import React from 'react';

export const iconData = {
  "id": "VerificaIgnite",
  "name": "VerificaIgnite",
  "category": "DA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.57 L 2.50 8.53 L 3.00 9.73 L 3.50 9.73 L 4.00 8.53 L 4.50 6.57 L 5.00 4.62 L 5.50 3.42 L 6.00 3.42 L 6.50 4.62 L 7.00 6.57 L 7.50 8.53 L 8.00 9.73 L 8.50 9.73 L 9.00 8.53 L 9.50 6.57 L 10.00 4.62 L 10.50 3.42 L 11.00 3.42 L 11.50 4.62 L 12.00 6.57 L 12.50 8.53 L 13.00 9.73 L 13.50 9.73 L 14.00 8.53 L 14.50 6.57 L 15.00 4.62 L 15.50 3.42 L 16.00 3.42 L 16.50 4.62 L 17.00 6.57 L 17.50 8.53 L 18.00 9.73 L 18.50 9.73 L 19.00 8.53 L 19.50 6.57 L 20.00 4.62 L 20.50 3.42 L 21.00 3.42 L 21.50 4.62 L 22.00 6.57"
      }
    ]
  ]
};

export const VerificaIgnite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.57 L 2.50 8.53 L 3.00 9.73 L 3.50 9.73 L 4.00 8.53 L 4.50 6.57 L 5.00 4.62 L 5.50 3.42 L 6.00 3.42 L 6.50 4.62 L 7.00 6.57 L 7.50 8.53 L 8.00 9.73 L 8.50 9.73 L 9.00 8.53 L 9.50 6.57 L 10.00 4.62 L 10.50 3.42 L 11.00 3.42 L 11.50 4.62 L 12.00 6.57 L 12.50 8.53 L 13.00 9.73 L 13.50 9.73 L 14.00 8.53 L 14.50 6.57 L 15.00 4.62 L 15.50 3.42 L 16.00 3.42 L 16.50 4.62 L 17.00 6.57 L 17.50 8.53 L 18.00 9.73 L 18.50 9.73 L 19.00 8.53 L 19.50 6.57 L 20.00 4.62 L 20.50 3.42 L 21.00 3.42 L 21.50 4.62 L 22.00 6.57" />
      {children}
    </svg>
  );
});

export default VerificaIgnite;
