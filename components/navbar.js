const navbar=()=>{
    return `

    
    <div id="navImg">
        <a href="name.html">
            <img src="https://www.bing.com/th?id=OIP.667QQW69DI_PSfuPdbYoFwHaC3&w=267&h=103&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""></a>
    </div>

    <div id="home">
        <a href="index.html">Home</a>

    </div>

    <div id="the_day">
        <a href="reciepe.html">Reciepe of the day</a>
        <a id="random" href="random.html">Random Food</a>
    </div>

    <div id="login">
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
    </div>

    <a href="search.html"><input oninput="debounce(main ,1000)" type="text" id="search" placeholder="search by Name"></a>

    



    `;

    
}

export default navbar;