import React from 'react';

export const iconData = {
  id: "UserCog2",
  name: "UserCog2",
  category: "U",
  nodes: [["path",{"d":"m14.305 19.53.923-.382"}],["path",{"d":"m15.228 16.852-.923-.383"}],["path",{"d":"m16.852 15.228-.383-.923"}],["path",{"d":"m16.852 20.772-.383.924"}],["path",{"d":"m19.148 15.228.383-.923"}],["path",{"d":"m19.53 21.696-.382-.924"}],["path",{"d":"M2 21a8 8 0 0 1 10.434-7.62"}],["path",{"d":"m20.772 16.852.924-.383"}],["path",{"d":"m20.772 19.148.924.383"}],["circle",{"cx":"10","cy":"8","r":"5"}],["circle",{"cx":"18","cy":"18","r":"3"}]]
};

export const UserCog2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="18" cy="18" r="3" />
      {children}
    </svg>
  );
});

export default UserCog2;
