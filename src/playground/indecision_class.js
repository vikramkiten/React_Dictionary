class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.addOption=this.addOption.bind(this);
        this.pickOption=this.pickOption.bind(this);
        this.deleteOptions=this.deleteOptions.bind(this);
        this.state={
            chores:[]
        }
    }
    pickOption()
    {
        let number=Math.floor(Math.random()*this.state.chores.length);
        alert(this.state.chores[number]);
    }
    deleteOptions(){
        this.setState(()=>{
            return {
                chores:[]
            };
        });
    }
    addOption(option)
    {
        if(!option)
        {
            return  "Enter the Valid item";
        }
        else if(this.state.chores.indexOf(option)>-1)
        {
            return "Item already EXISTS!";
        }
        this.setState((prevState)=>{
            return{
                chores:prevState.chores.concat([option])
            }
        })
    }
    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of the Computer";
            return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.chores.length>0} pickOption={this.pickOption} />
            <Options chores={this.state.chores} removeOptions={this.deleteOptions} />
            <AddOptions addOption={this.addOption} />
        </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
            </div>

        );
    }
}

class Action extends React.Component{
    render()
    {
        return (
            <div>
            <button disabled={!this.props.hasOptions} onClick={this.props.pickOption}>What should I do</button>
            </div>
        )
    }
}
class Options extends React.Component{
   
    render()
    {
        return (
            <div>
            <br/>
            <button onClick={this.props.removeOptions}>Remove All</button>
            <p>These are your options:{this.props.chores.length}</p>
            {
                this.props.chores.map((Create)=><Option1 key={Create} CreateValue={Create}/>)
            }
            <Option1/>
            </div>
        )
    }
}
class AddOptions extends React.Component{
    constructor(props)
    {
        super(props);
        this.notify=this.notify.bind(this);
        this.state={
            error:undefined
        }
    }
    notify(e)
    {
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error= this.props.addOption(option);
        this.setState(()=>{
            return {
                error
            }
        })
    }
    render()
    {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.notify}>
            <input type='text' name='option' />
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}
class Option1 extends React.Component{
    render()
    {
        return (
            <div>
            <p>{this.props.CreateValue}</p>
            </div>
        )
    }
}

const User=(props)=>{
    return (
        <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p> 
        </div>
)
}


ReactDOM.render(<User name="Vikram" age={26} />,document.getElementById('app'));