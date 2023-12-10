const Header = () => {
  const text ='Hello  Muslimbek'

  const getText = (text) => {
    return (
      <div className="className">
        <h1>Hello {text}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptatum vitae eaque suscipit, veniam dolor sunt eos adipisci voluptate earum id quibusdam quo obcaecati natus est corporis inventore. Incidunt distinctio vel enim voluptate!</p>
      </div>
      )
    }
    return  <div>{getText('norbek')}</div>
  }
  export default Header