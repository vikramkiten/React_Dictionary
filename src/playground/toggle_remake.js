class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.hideit=this.hideit.bind(this);
        this.state={
           status:false
}
    }
    hideit() {
        this.setState((prevState)=>{
            return {
            status:!prevState.status
        }})
    }
    render(){
        return (
            <div>
            <p>Visibility Toggle</p>
            <button onClick={this.hideit}>{this.state.status?'Hide':'show'}</button>
           {
               this.state.status && (
                   <div>
                   <p>Here is the toggle part</p>
                   </div>
               )
           }
            </div>
        );
    }
}

ReactDOM.render(<Toggle/>,document.getElementById('app'));