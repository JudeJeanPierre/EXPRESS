const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
            <title>{this.props.title}</title>
          </head>
          <body>
            <link rel="stylesheet" href="/css/app.css" />
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href=""><h1>Jud'ELECTRONICS</h1></a>
                <img src="./images/bg4.jpg" class="logo" alt="..." />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/products">Products</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/orders">Orders</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/users">Users</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/carts">Cart</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Inventory
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Computers</a></li>
                        <li><a class="dropdown-item" href="#">Phones</a></li>
                        <li><a class="dropdown-item" href="#">Radios</a></li>
                        <li><a class="dropdown-item" href="#">Televisions</a></li>
                        <li><a class="dropdown-item" href="#">Tablets</a></li>
                      </ul>
                    </li>

                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                
              </div>
            </nav>
          
            <h2>{this.props.title}</h2>
            {this.props.children}
            
          </body>
        </html>
      </>
    );
  }
}


module.exports = DefaultLayout;