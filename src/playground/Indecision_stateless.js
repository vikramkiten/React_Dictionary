class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.addOption=this.addOption.bind(this);
        this.pickOption=this.pickOption.bind(this);
        this.deleteOption=this.deleteOption.bind(this);
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
    deleteOption(optionToremove){
        this.setState((prevState)=>({
               chores:prevState.chores.filter((option)=>{
                   return optionToremove !==option;
               })
        }));
    }
    deleteOptions(){
        this.setState(()=>({chores:[]}));
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
        this.setState((prevState)=>({
            chores:prevState.chores.concat([option])
        }));
      
    }
    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of the Computer";
            return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.chores.length>0} pickOption={this.pickOption} />
            <Options deleteOption={this.deleteOption} chores={this.state.chores} removeOptions={this.deleteOptions} />
            <AddOptions addOption={this.addOption} />
        </div>
        );
    }
}
const Header=(props)=>{
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        </div>

    );
}

const Action=(props)=>{
    return (
        <div>
        <button disabled={!props.hasOptions} onClick={props.pickOption}>What should I do</button>
        </div>
    )
}

const Options=(props)=>{
    return (
        <div>
        <br/>
        <button onClick={props.removeOptions}>Remove All</button>
        <p>These are your options:{props.chores.length}</p>
        {
            props.chores.map((Create)=><Option1 key={Create} deleteOption={props.deleteOption} CreateValue={Create}/>)
        }
        <Option1/>
        </div>
    )
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
        this.setState(()=>({error:error}));
           
      
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
const Option1=(props)=>{
    return (
        <div>
        {props.CreateValue}
        <button 
        onClick={(e)=>{
           props.deleteOption(props.CreateValue); 
        }}>remove</button>
        </div>
    )

}


const User=(props)=>{
    return (
        <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p> 
        </div>
)
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));