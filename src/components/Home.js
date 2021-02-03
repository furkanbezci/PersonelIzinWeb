import React, { Component } from 'react';

import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h3>Hoş Geldiniz {localStorage.getItem("yoneticiKodu") == "null" ? "Yönetici ": " "} {localStorage.getItem("adi")} {localStorage.getItem("soyadi")}</h3>
        <div className="row">
        {
          localStorage.getItem("yoneticiKodu") == "null" ? <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personel Yönetim</h5>
              <h6 className="card-subtitle mb-2 text-muted">Sistemdeki Personellerinizi burada tutabilirsiniz</h6>
              <NavLink tag={Link} className="btn btn-success" to="/employe">Personel Ekle</NavLink>
            </div>
          </div> : null
        }
        {
          localStorage.getItem("yoneticiKodu") != "null" ? <div className="card">
            <div className="card-body">
              <h5 className="card-title">İzin Talep</h5>
              <h6 className="card-subtitle mb-2 text-muted">İzin Talep Edebilirsiniz</h6>
              <NavLink tag={Link} className="btn btn-info" to="/apply">İzin Talep Ekle</NavLink>
            </div>
          </div> : null
        }
        {
          localStorage.getItem("yoneticiKodu") == "null" ? <div className="card offset-md-3">
            <div className="card-body">
              <h5 className="card-title">Onay Listesi</h5>
              <h6 className="card-subtitle mb-2 text-muted">Personellerin Gönderdikleri İzin Taleplerini Görebilirsiniz</h6>
              <NavLink tag={Link} className="btn btn-info" to="/applylist">Onay Listesi</NavLink>
            </div>
          </div> : null
        }
        </div>

      </div>
    );
  }
}
