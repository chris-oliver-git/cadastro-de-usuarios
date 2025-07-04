import './style.css'
import Excluir from '../../assets/excluir.png'

function Home() {
  const users = [
    {
      id:'52453453453',
      name: 'Christopher',
      age: 33,
      email: 'christopher@email.com'
    },
    {
      id:'52453465623',
      name: 'Julliana',
      age: 33,
      email: 'julliana@email.com'
    },
    {
      id:'7785465623',
      name: 'Daniel',
      age: 25,
      email: 'daniel@email.com'
    }
  ]
  return (
      <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder= "Nome" name='nome' type='text'/>
        <input placeholder= "Idade" name='idade' type='number'/>
        <input placeholder= "E-mail" name='email' type='email'/>
        <button type='button'>Cadastrar</button>
      </form>
      
      {users.map((user) => (
      <div key={user.id} className='card'>
        <div>
        <p>Nome: {user.name} </p>
        <p>Idade: {user.age} </p>
        <p>E-mail: {user.email} </p>
        </div>
        <button>
          <img src={Excluir}/>
        </button>
      </div>
      
      ))}
      

      </div>
  )  
}
export default Home
