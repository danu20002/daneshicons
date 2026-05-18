import React from 'react';

export const iconData = {
  id: "SunDim",
  name: "SunDim",
  category: "S",
  nodes: [["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 4h.01"}],["path",{"d":"M20 12h.01"}],["path",{"d":"M12 20h.01"}],["path",{"d":"M4 12h.01"}],["path",{"d":"M17.657 6.343h.01"}],["path",{"d":"M17.657 17.657h.01"}],["path",{"d":"M6.343 17.657h.01"}],["path",{"d":"M6.343 6.343h.01"}]]
};

export const SunDim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
      {children}
    </svg>
  );
});

export default SunDim;
