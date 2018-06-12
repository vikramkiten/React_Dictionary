console.log("App.js is running");
var information={
    title:"Indecision App",
    caption:"Notify the things",
    samples:[]
};
function check_caption(param)
{
    if(param)
        return <p>{param}</p>
}
const onFormSubmit=(e)=>{
e.preventDefault();
let option=e.target.elements.options.value;
if(option)
{
    information.samples.push(option);
    e.target.elements.options.value='';
    renderForm();

}
};
const reset=(e)=>{
    e.preventDefault();
    information.samples.length=0;
    renderForm();

}
var appRoot=document.getElementById("app");
const renderForm=()=>{
var template=(
<div>
<h1>{information.title}</h1>
{check_caption(information.caption)}
<p>{information.samples.length>0 ? "Here are your options":"No options"}</p>
<p>{information.samples.length}</p>
{
    information.samples.map((sample)=>{
        return <li key={sample}>{sample}</li>
    })
}
<form onSubmit={onFormSubmit}>
<input type="text" name="options" />
<button>Addoption</button>
<button onClick={reset}>reset</button>
</form>
</div>
);




ReactDOM.render(template,appRoot);
}
renderForm();
