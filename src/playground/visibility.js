console.log("App is running!");

let state=false;
const hideit=()=>{
    state=!state;
    jsx();
}
const approot=document.getElementById('app')
const jsx=()=>{
    const template=(
        <div>
        <p>Visibility toggle</p>
        <button onClick={hideit}>{state ? "Hide it" : "show it"}</button>
        { state && (
            <div>
            Here are some details you might me interested!
            </div>
        )}
        </div>
    );
    ReactDOM.render(template,approot);
}
jsx();