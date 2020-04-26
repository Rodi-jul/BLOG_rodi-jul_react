import React from "react";
import "normalize.css";
import "./styles/global.scss";
//new App();

class App extends React.Component {
	render() {
		console.log("я рендерюсь");
		return( 
      <div>
        Это новая страница
      </div>
      );
	}
}

export default App;
