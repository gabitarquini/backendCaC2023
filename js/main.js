document.getElementById("header").innerHTML = `
            <nav class="navbar navbar-expand-sm navbar-ligth bg-ligth">
                <div class="container">
                    <a class="navbar-brand" href="productos.html"><img src="./img/logoGym.png" alt="logoGym" width="50px"></a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">CRUD</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="productos.html">CLASES/SERVICIOS</a>                                    
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0">                            
                            <a class="nav-link" href="index.html">SALIR</a>
                        </form>
                    </div>
                </div>
            </nav>
`