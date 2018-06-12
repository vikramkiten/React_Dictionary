class Counter extends React.Component{
    constructor(props)
    {
        super();
        this.plusone=this.plusone.bind(this);
        this.minusone=this.minusone.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count:0
        }
    }
    plusone(){
      this.setState((prevState)=>{
          return {
              count:prevState.count+1
          }
      })
    }
    minusone(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        })
    }
    reset(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-prevState.count
            }
        })
    }
    render(){
        return (
            <div>
            <h3>Counter:{this.state.count}</h3>
            <button onClick={this.plusone}>+1</button>
            <button onClick={this.minusone}>-1</button>
            <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
    
   
     ReactDOM.render(<Counter/>,document.getElementById('app'));