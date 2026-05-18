import React from 'react';

export const iconData = {
  id: "Aperture",
  name: "Aperture",
  category: "A",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m14.31 8 5.74 9.94"}],["path",{"d":"M9.69 8h11.48"}],["path",{"d":"m7.38 12 5.74-9.94"}],["path",{"d":"M9.69 16 3.95 6.06"}],["path",{"d":"M14.31 16H2.83"}],["path",{"d":"m16.62 12-5.74 9.94"}]]
};

export const Aperture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
      {children}
    </svg>
  );
});

export default Aperture;
