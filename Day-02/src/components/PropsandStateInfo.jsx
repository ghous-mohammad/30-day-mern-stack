

const PropsandStateInfo = () => {
  return (
    <div className="h-[90vh] mt-28">
     <h2 className="text-4xl font-semibold text-center text-slate-400" id="pas"> Difference Between <span className="text-slate-50 font-bold border rounded-3xl px-4 py-2
      hover:text-slate-200 border-slate-600  ">Props </span><span className="pl-2">And</span> <span className="text-slate-50 font-bold border rounded-3xl px-4 py-2 
      hover:text-slate-200 border-slate-600">State</span></h2>

      
      <div className="flex w-3/5 mx-auto text-center gap-x-9 pt-28 leading-7 ">
       <div>
        <h4 className="font-semibold text-2xl pb-5 text-slate-200">PROPS</h4>

<p className="text-slate-500"> Props, short for properties, are a way to pass data from a parent component to a child component in React. They are similar to function arguments in that they allow you to pass values from one component to another.
     Props are immutable, which means that once they are passed to a component, they cannot be changed.
</p>
       </div>
        

       
<div>
<h4 className="font-semibold text-2xl pb-5 text-slate-200">STATE</h4>

          <p className="text-slate-500">State represents the internal state of a component. Its an object that stores data that can be changed within the component. State should only be used for data that is specific to a component and cant be computed from props. When the state of a component changes, React will re-render the component and its children.</p>

</div>
        
     </div>

    
    </div>
  )
}

export default PropsandStateInfo