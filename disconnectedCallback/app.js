class MyCustomElement extends HTMLElement{
  constructor(){
    super()
    //Aquí estamos estableciendo en memoria las cosas que vamos a utilizar 
    //para el componente
    console.log('Hola desde el constructor - Memoria')
    //Pero esto no quiere decir que ya exista en el DOM
  }
    //Para que exista en el dom llamaremos a nuestro siguiente ciclo de via
  connectedCallback(){
    //Nuestro elemento ya existe como nodo en el dom entonces ya podemos generar
    //la interaccion
    console.log("Hola desde el DOM");
  }
  disconnectedCallback(){
    //Tercer ciclo de vida esto quiere decir que estamos retirando el elemento del dom
    console.log("Adiós del DOM");
  }
}

//Se define el componente para utilizarlo como etiqueta
customElements.define("my-custome-element", MyCustomElement);

//Retiramos el elemento del dom seleccionandolo con un query selector
//y removiendolo con la funcion remove que sirve para eliminar nodos.
document.querySelector("my-custome-element").remove();