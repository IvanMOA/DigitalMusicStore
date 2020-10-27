const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid col-8">
                <a class="navbar-brand" href="./index.html">
                    <i class="fas fa-music mr-2"></i>Digital Music Store
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./index.html">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./search.html">
                                Search
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./purchase.html">
                                Purchase
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./account.html">
                                Create account
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

ReactDOM.render(<Navbar />, document.querySelector(".navbarContainer"));
