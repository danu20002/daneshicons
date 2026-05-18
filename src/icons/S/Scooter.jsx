import React from 'react';

export const iconData = {
  id: "Scooter",
  name: "Scooter",
  category: "S",
  nodes: [["path",{"d":"M21 4h-3.5l2 11.05"}],["path",{"d":"M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009"}],["circle",{"cx":"19.5","cy":"17.5","r":"2.5"}],["circle",{"cx":"4.5","cy":"17.5","r":"2.5"}]]
};

export const Scooter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M21 4h-3.5l2 11.05" />
      <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" />
      <circle cx="19.5" cy="17.5" r="2.5" />
      <circle cx="4.5" cy="17.5" r="2.5" />
      {children}
    </svg>
  );
});

export default Scooter;
