// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

 


 

// Book your appointment here 
//        <span>I am under construction</span>  
       
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from './logo.png';
import './App.css';
import logo1 from './logo1.png'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headerStyle = {
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'flex-end',
    marginLeft:"50%",
    position:"fixed"
  };

  const transparentBackgroundStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '120%', // Adjust the top margin as needed
    textAlign: 'center',
      
  };

  return (
    <div className="App" style={backgroundStyle}>
        <img src={logo1} className="App-logo" alt="logo" />  
            <header style={headerStyle}>
        <p className="transparent-background" style={transparentBackgroundStyle}>
          <h2 style={{alignContent:"end",display:""}}>Book your appointment <a href='https://form.jotform.com/233253151346045'>here.</a></h2>
        </p>
      </header>
    </div>
  );
}

export default App;
