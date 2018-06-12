console.log("App.js is running");
var information={
    title:"Indecision App",
    caption:"Notify the things",
    samples:['react','python','mysql']
};
function check_caption(param)
{
    if(param)
        return <p>{param}</p>
}

var template=(
<div>
<h1>{information.title}</h1>
{check_caption(information.caption)}
<p>{information.samples.length>0 ? "Here are your options":"No options"}</p>
</div>
);

var info=(
<div>
<h4>My name is Vikram Bezawada</h4>
<h5>Age:20</h5>
<h5>I am from Andhra Pradesh</h5>
</div>
);
let count=0;
let addone=()=>{
    count++;
    renderCounter();
}
let subone=()=>{
    count--;
    renderCounter();
}
let reset=()=>{
    count=0;
    renderCounter();
    
}

//var appRoot=document.getElementById("app");
var append=document.getElementById('app2');
const renderCounter=()=>{
    let counter=(
        <div>
        <p>count:{count}</p>
        <button onClick={addone}>addone</button>
        <button onClick={subone}>subone</button>
        <button onClick={reset}>reset</button>
        </div>
        
    );

    ReactDOM.render(counter,append);
}
renderCounter();


//ReactDOM.render(template,appRoot);
