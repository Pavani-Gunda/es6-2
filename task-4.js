async function loadModule() {
  try{
    const module = await import('./greetings.js');
    module.sayHello();

  }catch(error){
    console.log("Error occured")
  }
}
loadModule();