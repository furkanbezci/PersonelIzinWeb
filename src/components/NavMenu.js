import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { RouteComponentProps, withRouter } from 'react-router'

class NavMenu extends Component {
  static displayName = NavMenu.name;

  state = {
    kullanici: null
  }

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  componentDidMount(){
    this.setState({ kullanici: localStorage.getItem("personelKodu") })
  }

  componentWillMount() {
    
    this.unlisten = this.props.history.listen((location, action) => {
      if(location.pathname == "/login" || location.pathname == "/signup") localStorage.clear()//tutulan veriler silinir
      this.setState({ kullanici: localStorage.getItem("personelKodu") })
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Personel İzin Yönetim</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  {/* sistemde kayıt yada login olmuş biri varsa göster */}
                  {this.state.kullanici ? <NavLink tag={Link} className="text-dark" to="/">Anasayfa</NavLink> : null}
                </NavItem>
                <NavItem>
                  {/* sistemde kayıt yada login olmuş biri varsa göster */}
                  {this.state.kullanici ? <NavLink tag={Link} className="text-dark" to="/login">Çıkış Yap</NavLink> : null}
                </NavItem>
                <NavItem>
                  {/* sistemde kayıt yada login olmuş biri varsa gösterme */}
                  {!this.state.kullanici ? <NavLink tag={Link} className="text-dark" to="/signup">Kayıt Ol</NavLink> : null}
                </NavItem>
                <NavItem>
                  {/* sistemde kayıt yada login olmuş biri varsa gösterme */}
                  {!this.state.kullanici ? <NavLink tag={Link} className="text-dark" to="/login">Giriş Yap</NavLink> : null}
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(NavMenu)