
class Login extends React.Component {
    constructor(props){
        super(props)

            this.state = {

                status:1
            }    
            
            this.ativar = this.ativar.bind(this)
            this.desativar = this.desativar.bind(this)
    }


    ativar(){
        this.setState({status:1})
    }

    desativar(){
        this.setState({status:0})
    }



        render(){

        let statusMsg;
        let statusBtn;
        
        if(this.state.status === 1){
            statusMsg = "Usuário Logado"
            statusBtn = <button onClick = {this.desativar}>Sair</button>
        }else{
            statusMsg =" Usuário não logado"
            statusBtn = <button onClick = {this.ativar} >Logar</button>
        }
            return (
                <div>

                <p>Login : {statusMsg}</p>
                {statusBtn}
                
                </div>
            )
        }
}



let elemento = (
    <div>
        <Login />
    </div>
)




ReactDOM.render(
    elemento,
    document.getElementById('app')
)