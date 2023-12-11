import{j as t}from"./jsx-runtime-c3de6e4e.js";import{a as u,b as m,u as h,B as l}from"./index-863ce34c.js";import"./index-65d0a824.js";import"./_commonjsHelpers-725317a4.js";import"./extends-98964cd2.js";import"./v4-4a60fe23.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Toast",component:u,args:{title:"Blank space",description:"Nice to meet you where have you been?"},argTypes:{open:{control:{type:"boolean"}}},decorators:[]},e=o=>{const[{open:r},g]=O(),T=()=>g({open:!r});return t.jsx(m,{children:t.jsx(u,{...o,open:r,onOpenChange:T})})},s=o=>t.jsx(m,{children:t.jsx(_,{...o})}),_=o=>{const{addToast:r}=h();return t.jsx(l,{onClick:()=>r(o),children:"Add Toast"})};e.args={};s.args={};var n,a,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ToastProps) => {
  const [{
    open
  }, updateArgs] = useArgs();
  const handleOpenChange = () => updateArgs({
    open: !open
  });
  return <ToastProvider>
      <Toast {...args} open={open} onOpenChange={handleOpenChange} />
    </ToastProvider>;
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ToastProps) => {
  return <ToastProvider>
      <ToastWithButton {...args} />
    </ToastProvider>;
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const f=["Default","WithButton"];export{e as Default,s as WithButton,f as __namedExportsOrder,v as default};
//# sourceMappingURL=Toast.stories-80ce84bc.js.map
